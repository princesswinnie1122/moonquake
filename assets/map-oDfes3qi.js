import"./modulepreload-polyfill-9p4a8sJU.js";Cesium.Ion.defaultAccessToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyNjY5NmRmOS04OGU2LTQyYTYtYjBkOC04NzMwMTVhNWE3ODAiLCJpZCI6MTk0NDg2LCJpYXQiOjE3MDczMDg2MjZ9.7VlIO8ksrHHXepI5cXcg0bD64hZnd1XjeHKDDIMvj2E";const n=new Cesium.Viewer("cesiumContainer",{imageryProvider:new Cesium.SingleTileImageryProvider({url:"../images/moon.jpg"}),terrainProvider:new Cesium.EllipsoidTerrainProvider,baseLayerPicker:!1,geocoder:!1,homeButton:!0,infoBox:!1,sceneModePicker:!1,selectionIndicator:!1,timeline:!1,navigationHelpButton:!1,animation:!1,skyAtmosphere:!1});let a=1;n.scene.globe.tileLoadProgressEvent.addEventListener(e=>{e>0&&!a&&(a=e);const t=(a-e)/a*283;document.querySelector(".donut-segment").style.strokeDashoffset=283-t,e===0&&(document.getElementById("loadingOverlay").style.opacity="0",setTimeout(()=>{document.getElementById("loadingOverlay").style.display="none"}))});n.scene.globe.showGroundAtmosphere=!1;n.camera.setView({destination:Cesium.Cartesian3.fromDegrees(0,0,15e6),orientation:{heading:Cesium.Math.toRadians(0),roll:0}});n.camera.lookAtTransform(Cesium.Matrix4.IDENTITY);Cesium.KmlDataSource.load("../data/lognonne.kml",{clampToGround:!0}).then(function(e){n.dataSources.add(e),e.entities.values.forEach(function(o){o.position&&(o.show=!1,c(o.position.getValue(Cesium.JulianDate.now())))})});function c(e){n.entities.add({position:e,point:{color:Cesium.Color.fromCssColorString("#007bff"),pixelSize:12,heightReference:Cesium.HeightReference.CLAMP_TO_GROUND}});const o=[];for(let t=0;t<3;t++)o.push(n.entities.add({position:e,point:{color:Cesium.Color.fromCssColorString("#007bff").withAlpha(.15-t*.05),pixelSize:12+t*3,heightReference:Cesium.HeightReference.CLAMP_TO_GROUND}}));n.clock.onTick.addEventListener(function(){o.forEach((t,i)=>{let s=t.point.pixelSize.getValue(Cesium.JulianDate.now());s+=1,s>25+i*5&&(s=10+i*5),t.point.pixelSize=s})})}n.screenSpaceEventHandler.setInputAction(function(o){const t=n.scene.pick(o.position),i=document.getElementById("customInfoBox"),s=document.getElementById("infoContent");Cesium.defined(t)&&Cesium.defined(t.id)&&t.id.point?(s.innerHTML=`
            <strong>Info Box</strong><br>
            X: ${o.position.x}<br>Y: ${o.position.y}
        `,i.style.left=o.position.x+30+"px",i.style.top=o.position.y+5+"px",i.style.display="block"):i.style.display="none"},Cesium.ScreenSpaceEventType.LEFT_CLICK);const r=n.screenSpaceEventHandler;r.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("backgroundMusic"),o=document.getElementById("muteButton"),t=o.querySelector("i");function i(){t.className=e.muted?"fa-solid fa-volume-xmark":"fa-solid fa-volume-high"}function s(){e.play().then(()=>{document.removeEventListener("mousemove",s),e.muted=!1,e.volume=.6,i()}).catch(l=>console.error("Playback failed:",l))}document.addEventListener("mousemove",s),o.addEventListener("click",()=>{(!e.paused||e.currentTime)&&(e.muted=!e.muted,i())})});
