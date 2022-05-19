#This is Images API Image Processor for Udacity

1-You will need to use `npm I` to install dependencies and dev.
2-Available endpointes are 'localhost:777\' and 'localhost:777\api\crop'
3-list of availble images are as the following [encenadaport.jpg,fjord.jpg,icelandwaterfall.jpg,palmtunnel.jpg,santamonica.jpg,test.png]
4- You can use endpoint with params as the following (http://localhost:7777/api/crop?name=fjord&width=500&height=400)
5-use Scripts for as the following:`npm run ....`  
-test => to run build & jasmine test
-deve => to run develope server with nodemon
-rmv => to remove the build folder
-build => to run typscript into the dist
-start => to start the server in port 7777
-prettier => to run prettier for formatting
-lint => to run lint for errors
-jasmine => run jasmin

<!-- Project tree starts here -->

- [**assets**](assets)
  - [**thumbs**](assets/thumbs)
- [**dist**](dist)
  - [**middleware**](dist/middleware)
  - [**routes**](dist/routes)
    - [**api**](dist/routes/api)
  - [**tests**](dist/tests)
    - [**endpointsSpecs**](dist/tests/endpointsSpecs)
    - [**helpers**](dist/tests/helpers)
    - [**utilities**](dist/tests/utilities)
  - [**utilities**](dist/utilities)
- [**spec**](spec)
  - [**support**](spec/support)
- [**src**](src)
  - [**middleware**](src/middleware)
  - [**routes**](src/routes)
    - [**api**](src/routes/api)
  - [**tests**](src/tests)
    - [**endpointsSpecs**](src/tests/endpointsSpecs)
    - [**helpers**](src/tests/helpers)
    - [**utilities**](src/tests/utilities)
  - [**utilities**](src/utilities)

<!-- Project tree ends here -->

### Credits and helper recources

- https://github.com/HossamAbubakr/Pixely-Image-Processing-API.git
- https://github.com/mohammedelzanaty/image-processing-api.git
- https://github.com/otacke/udacity-image-processing-api.git
- https://stackoverflow.com/questions/7042340/error-cant-set-headers-after-they-are-sent-to-the-client -https://stackshare.io/stackups/jasmine-vs-supertest#:~:text=Jasmine%20and%20SuperTest%20can%20be,stars%20and%20568%20GitHub%20forks.
- https://www.youtube.com/watch?v=5WFyhsnU4Ik&list=PLECZ6pz3j9Rb7T99A0d8ReO-GuM7HG5Ie&index=1&t=20s
- https://www.youtube.com/channel/UCCDDZ73SMXb3xp-hjMHngXg
- https://www.youtube.com/watch?v=oNlMrpnUSFE&list=PLECZ6pz3j9Rb7T99A0d8ReO-GuM7HG5Ie&index=3
- https://www.youtube.com/playlist?list=PL55RiY5tL51q4D-B63KBnygU6opNPFk_q
