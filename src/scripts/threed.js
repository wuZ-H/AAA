
    async function create_3d(n){
      var canvas = document.createElement("canvas");
      canvas.setAttribute("id","threed");
      document.body.appendChild(canvas);
      var engine =new BABYLON.Engine(canvas,true);
      var scene= new BABYLON.Scene(engine);
      var camera = new BABYLON.ArcRotateCamera("camera1",0,0,8,new BABYLON.Vector3(0, 0, 0),scene);
      camera.setPosition(new BABYLON.Vector3(0,0,-8));
      camera.attachControl(canvas, true);
      camera.inputs.removeByType("ArcRotateCameraMouseWheelInput");
      const b=camera.beta;
      Object.defineProperty(camera,"beta",{
        get:function(){return b;},
        set:function(){}
      });
      scene.autoClear = false;
      scene.clearColor = new BABYLON.Color4(0, 0, 0, 0);
      scene.activeCamera.panningSensibility = 0;
      var light = new BABYLON.HemisphericLight("light",new BABYLON.Vector3(0, 1, 0), scene);
      light.intensity = 0.7;
      BABYLON.SceneLoader.ImportMesh("","src/3D/Director.glb","",scene,function(newMeshes){
        newMeshes[0].scaling = new BABYLON.Vector3(0.8,1,1);
        newMeshes[0].position.y=-2;
      });
      console.log(scene.meshes.foreach);
      engine.runRenderLoop(function () {scene.render();});
    }
    function del_3d(){
      var canvas=document.getElementById("threed");
      document.body.removeChild(canvas);
    }