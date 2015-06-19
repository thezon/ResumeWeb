(ns server.resume
   (:require 
     [compojure.core :refer :all]
     [compojure.route :as route]
     [ring.util.response :as ring-resp]
     [data.resumedata :as data]))

(defn get-resume [request] 
  (ring-resp/response 
    (str 
      (data/get-resume
        (read-string (:resumetype (:params request )))))))

(defn get-res-types [request]
  (ring-resp/response 
    (str (data/get-resume-types))))

(defroutes app
  (GET "/getresume" request (get-resume request))
  (GET "/getresumetypes" request (get-res-types request))
  (route/resources "/pages/"))
