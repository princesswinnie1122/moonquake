import"./modulepreload-polyfill-9p4a8sJU.js";Cesium.Ion.defaultAccessToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyNjY5NmRmOS04OGU2LTQyYTYtYjBkOC04NzMwMTVhNWE3ODAiLCJpZCI6MTk0NDg2LCJpYXQiOjE3MDczMDg2MjZ9.7VlIO8ksrHHXepI5cXcg0bD64hZnd1XjeHKDDIMvj2E";const t=new Cesium.Viewer("cesiumContainer",{imageryProvider:new Cesium.SingleTileImageryProvider({url:"../images/moon.jpg"}),terrainProvider:new Cesium.EllipsoidTerrainProvider,baseLayerPicker:!1,geocoder:!1,homeButton:!1,infoBox:!1,sceneModePicker:!1,selectionIndicator:!1,timeline:!1,navigationHelpButton:!1,animation:!1,skyAtmosphere:!1});t.scene.globe.showGroundAtmosphere=!1;t.camera.setView({destination:Cesium.Cartesian3.fromDegrees(0,0,15e6),orientation:{heading:Cesium.Math.toRadians(0),roll:0}});t.camera.lookAtTransform(Cesium.Matrix4.IDENTITY);Cesium.KmlDataSource.load("../data/lognonne.kml",{clampToGround:!0}).then(function(e){t.dataSources.add(e),e.entities.values.forEach(function(i){i.position&&(i.show=!1,c(i.position.getValue(Cesium.JulianDate.now())))})});function c(e){t.entities.add({position:e,point:{color:Cesium.Color.fromCssColorString("#007bff"),pixelSize:12,heightReference:Cesium.HeightReference.CLAMP_TO_GROUND}});const i=[];for(let o=0;o<3;o++)i.push(t.entities.add({position:e,point:{color:Cesium.Color.fromCssColorString("#007bff").withAlpha(.15-o*.05),pixelSize:12+o*3,heightReference:Cesium.HeightReference.CLAMP_TO_GROUND}}));t.clock.onTick.addEventListener(function(){i.forEach((o,n)=>{let s=o.point.pixelSize.getValue(Cesium.JulianDate.now());s+=1,s>25+n*5&&(s=10+n*5),o.point.pixelSize=s})})}t.screenSpaceEventHandler.setInputAction(function(i){const o=t.scene.pick(i.position),n=document.getElementById("customInfoBox"),s=document.getElementById("infoContent");Cesium.defined(o)&&Cesium.defined(o.id)&&o.id.point?(s.innerHTML=`
            <strong>Info Box</strong><br>
            X: ${i.position.x}<br>Y: ${i.position.y}
        `,n.style.left=i.position.x+30+"px",n.style.top=i.position.y+5+"px",n.style.display="block"):n.style.display="none"},Cesium.ScreenSpaceEventType.LEFT_CLICK);const r=t.screenSpaceEventHandler;r.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("backgroundMusic"),i=document.getElementById("muteButton"),o=i.querySelector("i");function n(){o.className=e.muted?"fa-solid fa-volume-xmark":"fa-solid fa-volume-high"}function s(){e.play().then(()=>{document.removeEventListener("mousemove",s),e.muted=!1,e.volume=.6,n()}).catch(a=>console.error("Playback failed:",a))}document.addEventListener("mousemove",s),i.addEventListener("click",()=>{(!e.paused||e.currentTime)&&(e.muted=!e.muted,n())})});