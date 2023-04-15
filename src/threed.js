
    import * as three from 'three';
    import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
    import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';


      const scene = new three.Scene();
      const camera = new three.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
      const renderer = new three.WebGLRenderer({alpha:true});
      renderer.setSize(window.innerHeight/4,window.innerHeight/4);
      renderer.outputEncoding = three.sRGBEncoding;
      document.body.appendChild( renderer.domElement );

      const loader = new GLTFLoader();
      const dracoLoader = new DRACOLoader();
      dracoLoader.setDecoderPath( 'three/addons/libs/draco/' );
      loader.setDRACOLoader( dracoLoader );
      loader.load('src/Director.glb',function(gltf){scene.add( gltf.scene );},undefined,function(error){console.error( error );});

      camera.position.z = 5;

      function animate() {
        requestAnimationFrame(animate);
        renderer.render( scene, camera );
      }
      animate();