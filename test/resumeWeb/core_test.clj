(ns resumeWeb.core-test  
  (:require [clojure.test :refer :all]
            [server.resume :as service]
            [compojure.handler :as handler]
            [ring.adapter.jetty]))



(ring.adapter.jetty/run-jetty (handler/site service/app) {:port 3000})
