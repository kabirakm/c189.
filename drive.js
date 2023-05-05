AFRAME.registerComponent("drive",{
    init:function(){
        var gameStateValue=this.el.getAttribute("game")
        if (gameStateValue=="play"){
            this.driveCar()
        }
    },
    isVelocityActive: function(){
        return Math.random()<0.25;
    },
    driveCar:function(){
        var multiply=10;
        var wheelRotation=0;

        window.addEventListener("keydown",function(e)){
            var wheel=document.querySelector("#control-wheel")
            if(e.code=="ArrowRight" && wheelRotation<40){
                wheelRotation+=5
                wheel.setAttribute("rotation",{x:0,y:0,z:wheelRotation})
            }

            var cameraRig=document.querySelector("#camera-rig")
            var cameraRotation=cameraRig.getAttribute("rotation")
            var cameraPosition=cameraRig.getAttribute("postion")
            var cameraMoveControl=cameraRig.getAttribute("movement-controls")

            cameraRig.setAttribute("movement-controls",{"speed":cameraMoveControl.speed+0.005})


            var cameraDirection=new THREE.Vector3();
            cameraRig.object3D.getWorldDirection(cameraDirection)  

        }
    }
})