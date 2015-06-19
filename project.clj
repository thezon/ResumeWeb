(defproject resumeWeb "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-3211"]
                 [garden "1.2.5"]
                 [ring "1.4.0-RC1"]
                 [compojure "1.3.4"]
                 [org.omcljs/om "0.8.8" :exclusions [cljsjs/react]]
                 [ring/ring-jetty-adapter "1.3.2"]
                 [org.clojure/tools.logging "0.3.1"]
                 [cljsjs/react-with-addons "0.12.2-4"]
                 [hiccups "0.3.0"]
                 [racehub/om-bootstrap "0.5.0"]
                 [cljs-ajax "0.3.11"]
                 [com.datomic/datomic-free "0.8.3826"]]
    :plugins [[lein-cljsbuild "1.0.5"]
             [lein-figwheel "0.3.1"]]
    :cljsbuild {
                :builds [{ :id "example" 
                          :source-paths ["src/"]
                          :figwheel { :on-jsload "exampleForResumeCljs.coreOM/reload"}              
                          :compiler {                                     
                                     :output-to "resources/public/js/main.js"
                                     :output-dir "resources/public/js/"}}]
                })
