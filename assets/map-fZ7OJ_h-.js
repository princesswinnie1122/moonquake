import"./modulepreload-polyfill-9p4a8sJU.js";Cesium.Ion.defaultAccessToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyNjY5NmRmOS04OGU2LTQyYTYtYjBkOC04NzMwMTVhNWE3ODAiLCJpZCI6MTk0NDg2LCJpYXQiOjE3MDczMDg2MjZ9.7VlIO8ksrHHXepI5cXcg0bD64hZnd1XjeHKDDIMvj2E";const n=new Cesium.Viewer("cesiumContainer",{imageryProvider:new Cesium.SingleTileImageryProvider({url:"../images/moon_color.jpg"}),terrainProvider:new Cesium.EllipsoidTerrainProvider,baseLayerPicker:!1,geocoder:!1,homeButton:!0,fullscreenButton:!1,infoBox:!1,sceneModePicker:!1,selectionIndicator:!1,timeline:!1,navigationHelpButton:!1,animation:!1,skyAtmosphere:!1});n.cesiumWidget.creditContainer.style.display="none";let r=1;n.scene.globe.tileLoadProgressEvent.addEventListener(e=>{e>0&&!r&&(r=e);const t=(r-e)/r*283;document.querySelector(".donut-segment").style.strokeDashoffset=283-t,e===0&&(document.getElementById("loadingOverlay").style.opacity="0",setTimeout(()=>{document.getElementById("loadingOverlay").style.display="none"},500))});n.scene.globe.showGroundAtmosphere=!1;n.camera.setView({destination:Cesium.Cartesian3.fromDegrees(0,0,15e6),orientation:{heading:Cesium.Math.toRadians(0),roll:0}});n.camera.lookAtTransform(Cesium.Matrix4.IDENTITY);const C="../data/lognonne.geojson";Cesium.GeoJsonDataSource.load(C,{markerSize:10,markerColor:Cesium.Color.fromAlpha(Cesium.Color.fromCssColorString("#007bff"),.01)}).then(function(e){e.entities.values.forEach(function(o){o.position&&y(o.position.getValue(Cesium.JulianDate.now()))}),n.dataSources.add(e)});function y(e){n.entities.add({position:e,point:{color:Cesium.Color.fromCssColorString("#007bff"),pixelSize:9,heightReference:Cesium.HeightReference.CLAMP_TO_GROUND}});const o=[];for(let t=0;t<3;t++)o.push(n.entities.add({position:e,point:{color:Cesium.Color.fromCssColorString("#007bff").withAlpha(.3-t*.1),pixelSize:9+t*3,heightReference:Cesium.HeightReference.CLAMP_TO_GROUND}}));n.clock.onTick.addEventListener(function(){o.forEach((t,i)=>{let s=t.point.pixelSize.getValue(Cesium.JulianDate.now());s+=1,s>20+i*5&&(s=9+i*3),t.point.pixelSize=s})})}let c=null;n.screenSpaceEventHandler.setInputAction(function(o){const t=n.scene.pick(o.endPosition);if(Cesium.defined(t)&&t.id&&t.id.properties){if(c!==t.id){c=t.id;const i=t.id.properties,s=i.getValue().Type||"N/A",a=i.getValue().Depth||"N/A",p=i.getValue().Date||"N/A",f=i.getValue().Seconds||"N/A";let d="N/A",u="N/A";if(t.id.position){const m=Cesium.Cartographic.fromCartesian(t.id.position.getValue(Cesium.JulianDate.now()));d=Number(Cesium.Math.toDegrees(m.latitude).toFixed(6)),u=Number(Cesium.Math.toDegrees(m.longitude).toFixed(6))}const l=document.getElementById("customInfoBox"),g=document.getElementById("infoContent");g.innerHTML=`
                <strong>Type:</strong> ${s}<br>
                <strong>Latitude:</strong> ${d}<br>
                <strong>Longitude:</strong> ${u}<br>
                <strong>Depth:</strong> ${a}<br>
                <strong>Date:</strong> ${p}<br>
                <strong>Seconds:</strong> ${f}
            `,l.style.left=`${o.endPosition.x+30}px`,l.style.top=`${o.endPosition.y+10}px`,l.style.display="block"}}else document.getElementById("customInfoBox").style.display="none",c=null},Cesium.ScreenSpaceEventType.MOUSE_MOVE);const h=n.screenSpaceEventHandler;h.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("backgroundMusic"),o=document.getElementById("muteButton"),t=o.querySelector("i");function i(){t.className=e.muted?"fa-solid fa-volume-xmark":"fa-solid fa-volume-high"}function s(){e.play().then(()=>{document.removeEventListener("mousemove",s),e.muted=!1,e.volume=.6,i()}).catch(a=>console.error("Playback failed:",a))}document.addEventListener("mousemove",s),o.addEventListener("click",()=>{(!e.paused||e.currentTime)&&(e.muted=!e.muted,i())})});
