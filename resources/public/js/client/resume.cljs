(ns client.resume
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [om-bootstrap.table :refer [table]]
            [om-tools.dom :as d :include-macros true]
            [om-bootstrap.button :as b]
            [om-bootstrap.random :as r]
            [om-bootstrap.grid :as g]
            [om-bootstrap.input :as i]
            [om-bootstrap.panel :as p]
            [om-bootstrap.nav :as n] 
            [cljs.reader :as read]
            [om-bootstrap.modal :as md]
            [garden.core :refer [css]]
            [om-bootstrap.progress-bar :as pb]
            [ajax.core :refer [GET POST]]))
 
(enable-console-print!)  

(def app-state (atom {:cols nil
                      :res-style nil
                      :resume-data nil})) 

(defn get-call
  "Wrapper to simplify Ajax call"
  ([state-key service-path]
    (GET service-path 
         {:handler (fn [r] 
                     (swap! app-state assoc state-key r))})))

;inialize
(get-call :resume-types "/getresumetypes")

(defn get-resume-data [res-id]
  "Call to server for resume data by id"
  (get-call :resume-data (str "/getresume?resumetype="res-id)))

(defn res-style [data res-style]
  (swap! app-state assoc :res-style res-style))

(defprotocol load-comp
  "Page configuration -- Injection"
  (gen-style [_])
  (gen-header [_ main-header body])
  (gen-body [_ header body]))

(def load-basic
  (reify 
    load-comp
    (gen-style [_]
      (d/style
        (css [:.basic-head {:border-bottom "solid 1px;" 
                            :width "80%; padding: 5px;" 
                            :text-transform "capitalize;"
                            :text-shadow "5px 5px 10px Gainsboro"}]
             
             [:.basic-head-body {:border-bottom "solid 2px WhiteSmoke;" 
                                 :border-left "solid 1px WhiteSmoke;" 
                                 :width "80%; padding: 5px;"}]
             [:.basic-body {:width "80%; padding: 5px;"
                            :font-weight "normal"
                            :font-style "italic"}])))
    (gen-header [_ main-header body]
      (d/div 
        (if main-header  (d/h1 {:class "basic-head"} main-header) "")
        body))
    (gen-body [_ header body]
      (d/div  {:class "basic-head-body"}
              (if header (d/h2 {}  header) "")
              (d/h3 {:class "basic-body"} body)))))

(def load-panels
  (reify 
    load-comp
    (gen-style [_] 
      (d/style
        (css [:.basic-head {:text-transform "capitalize;"}]
             [:.basic-head-body {}]
             [:.basic-body {}])))
    (gen-header [_ main-header body]
      (p/panel (if main-header {:class "basic-head" :header main-header} {}) body))
    (gen-body [_ header body]
      (p/panel 
        (if header {:class "basic-head" :header header} {})
        body))))

(def load-jumbo
  (reify 
    load-comp
    (gen-style [_] 
      (d/style
        (css [:table { :Background-color "#eee"}]
             [:.basic-head {:text-transform "capitalize;" :Background-color "#eee"}]
             [:.basic-head-body {}]
             [:.basic-body {}])))
    (gen-header [_ main-header body]
 (r/jumbotron {} (if main-header (d/h1 {:class "basic-head"} main-header) "") body))
    (gen-body [_ header body]
      (p/panel  
        (if header {:class "basic-head" :header header} {})
        body))))

(defn generate-comp  [data sec-key header format-func]
  "Resume component generator"
  (d/div (gen-style format-func)
  (gen-header format-func header 
            (for [value (sec-key (read/read-string (:resume-data data)))]
              (let [has-header (> (count value) 1) 
                    header-val (if has-header (str (first value)) nil)
                    val (if has-header (second value) (first value))
                    body-val (if has-header 
                                 (d/ul (map (fn [x] (d/li x)) val))
                               value)]
                (gen-body format-func header-val body-val))))))

(defn get-full-resume [data]
  "basic loads of all resume data"
  (if (not (nil? (:resume-data data))) 
    (let [resume-sections   (if (:resume-data data) (keys (read/read-string (:resume-data data))) nil)
          cols  (if (:cols data) (:cols data) 1)
          build-funct (if (:res-style data) (:res-style data) load-basic)
          pic (d/img { :id "imageme" :src "/pages/img/me.png" :height "150" :width "150"})
          gen-sec (map (fn [key] (generate-comp data key (name key) build-funct )) resume-sections)
          vec-secs (partition cols cols "" (rest gen-sec))]
      (d/div  
        (d/table 
          (d/tr (d/td pic)  (d/td (first gen-sec))))        
        (d/table 
          (d/tbody
            (map (fn[v] (d/tr  (map (fn [sv] (d/td {:class "panelgrid"} sv)) v))) vec-secs)))))))

(defn menu-comp [data]
  (d/div 
    (b/toolbar {}
               (b/dropdown {:bs-style "warning", :title "Select Resume"}
                           (for [resume-type (read/read-string
                                               (if (nil? (:resume-types data))
                                                 "" 
                                                 (:resume-types data)))]
                             (b/menu-item {:key (first resume-type) 
                                           :onClick (fn [] (get-resume-data (first resume-type)))} (second resume-type))))
               (b/button-group {}
                               (b/button {:onClick (fn [] (res-style data load-panels))} "Panel")
                               (b/button {:onClick (fn [] (res-style data load-jumbo))} "Jumbo")
                               (b/button {:onClick (fn [] (res-style data load-basic))} "Basic"))
               
               (b/button-group {} 
                               (for [value (range 1 6)]
                                 (b/button {:onClick (fn []  (swap! app-state assoc :cols value))} value))))))

(defn test-comp-gen [data owner]
  (d/div    
    (d/div
      (d/style (css [:.panelgrid {:vertical-align "top"
                                  :width  (str (/ 100 (:cols data)) "%") }]))    
      (menu-comp data))
    (d/br)
    (get-full-resume data)))
  
(om/root  
  (fn [data owner]  
    (om/component  
      ( test-comp-gen data owner)))
  app-state  
  {:target (. js/document (getElementById "app"))})