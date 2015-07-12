(ns cljAutobuild
  (:require [cljs.closure :as c]
            [server.resume :as s] ; set to defroutes location
            [compojure.handler :as h]
            [ring.adapter.jetty :as j]))

; Autobuilder loads figwheel auto clojurescript compiler
; and jetty server while providing a non locked repl session

;To use
; 1) Add  [lein-figwheel "0.3.1"] to project plugins
; 2) Add [ring/ring-jetty-adapter "1.3.2"] &  [compojure "1.3.4"] to project dependencies
; 3) Create server core file
;    3.1) set defroutes 
; 4) Above require defroutes location
; 5) Set below configurations

(def output-file "resources/public/js/main.js")   ;Clojurescript target output file
(def entry-var s/app)                             ;Ring applications variable
(def server-port 3000)                            ;server port 
(def output-dir "resources/public/js/")           ;Clojurescript output directory

; Watch for clojure script changes and auto compile
(def buildref 
  (future
      (def options {
                    :output-to (str output-file output-file)
                    :output-dir output-dir
                    :warnings true})
      (c/build "src" options)     
      (c/watch "src" options)))

; auto start jetty server
(def serverref
  (future
    (j/run-jetty (h/site entry-var) {:port server-port})))
  
(defn kill-processes []
  (future-cancel buildref)
  (future-cancel serverref))
