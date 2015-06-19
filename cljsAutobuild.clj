(ns cljAutobuild
  ;(:use [ring.adapter.jetty])
  (require [cljs.closure :as c]
           [cljs.closure :as c]))

(def options {
              :output-to "resources/public/js/main.js"
              :output-dir "resources/public/js/"
              :warnings true})

(c/build "src" options) 

(c/watch "src" options)

