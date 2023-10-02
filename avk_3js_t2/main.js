import './style.css'
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import { PLYLoader } from 'three/examples/jsm/loaders/PLYLoader'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import Stats from 'three/examples/jsm/libs/stats.module'








//scene/reality is created
const scene = new THREE.Scene();

//background photo set 
const texture1 = new THREE.TextureLoader().load('./3Dmodels/images/back3.jpg');
scene.background = texture1;

//camera made 
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight,0.1,1000);


//rendering graphics in scene
const renderer = new THREE.WebGLRenderer(
  {
    //canvas is set to be an element with id as bg
    canvas : document.querySelector('#bg'),
  }
);

//ratio of renderer
renderer.setPixelRatio(window.devicePixelRatio);


var ratio= innerWidth/innerHeight;

//setting display to full screen
/*
if (ratio>1){
  
  renderer.setSize(window.innerWidth,window.innerHeight);

}
if ((ratio<1)&&(ratio>0.5)){

  renderer.setSize(window.innerWidth,window.innerHeight);
}
if (ratio<=0.5){
}
*/

  renderer.setSize(window.innerWidth,window.innerHeight);


//setting camera at some distance since originally it is set at centre
// both do the same thing 
camera.position.setZ(50);
camera.position.x = 2;


//renderers render method . when this function is called then only the scene is rendered
renderer.render(scene,camera);

//geometry made of shape
const geo = new THREE.TorusGeometry(20,10,15,150);

// material set for shape
const mat = new THREE.MeshStandardMaterial({color: 0xFFFF00});

//material and geomertry applied to 3d shape
const toruss = new THREE.Mesh(geo,mat);

//3d shape added
// scene.add(toruss);



//controler through mouse
const xontrols = new OrbitControls(camera,renderer.domElement);









$(window).resize(function(){
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight,0.1,1000);
  renderer.setSize(window.innerWidth,window.innerHeight);
})










//light source made, white light 
const ptlight1 = new THREE.PointLight(0xffffff,10000);
//position is set
ptlight1.position.set(0,0,20);
//added to scene
scene.add(ptlight1);

//shows position of point source
const lighthelper1 = new THREE.PointLightHelper(ptlight1);
scene.add(lighthelper1);



// light up everything in scene
const ambientlight1 = new THREE.AmbientLight(0xffffff);
scene.add(ambientlight1);



//2dgrid added
const gridhelper1 = new THREE.GridHelper(200,50);
scene.add(gridhelper1);



//  "Array(22).fill().x"  this means thsi line will be run 22 times and x will be run 22 times .
//AND all the 22 times its run the valuses is stored in array of 22 



//UwU--------------- adding many random objectss in scene -----------UwU
function addstars(){
  const geo2 = new THREE.SphereGeometry(0.3,24,24);
  const mat2 = new THREE.MeshStandardMaterial({color: 0xffffff});
  const star = new THREE.Mesh(geo2,mat2);


  //array means it is run 3 times. here x= choosing eandom nuimber between +100 and -100
  const [a,b,c]= Array(3).fill().map(()=>THREE.MathUtils.randFloatSpread(100));

  star.position.set(a,b,c);
  scene.add(star);
}


//250 times funtion will be called; and all values will be stored fin an array, or the position of starts will vanish
Array(150).fill().forEach(addstars);









const bgtexture = new THREE.TextureLoader().load('./3Dmodels/images/v.jpg');


const bg = new THREE.Mesh(
  new THREE.SphereGeometry(1,50,50),
  new THREE.MeshStandardMaterial(
    {
      map : bgtexture,
    }
  )

);
bg.position.setX = 0;
bg.position.setY = 0;
scene.add(bg);














const gltfl = new GLTFLoader();
gltfl.load('./3Dmodels/scene.gltf', (gltfScene)=>{

  // so we can animate this
  var lmodel = gltfScene;


  gltfScene.scene.scale.set(100,100,100);
  gltfScene.scene.position.x = -150;
  gltfScene.scene.position.y = -150;
  gltfScene.scene.position.z = 100;

  // gltfScene.scene.rotateOnAxis = 5000;
  scene.add(gltfScene.scene);
});


















//moving camera while scrolling
function movecam(){
  //tells how far we are from top
  
const t = document.body.getBoundingClientRect().top;



camera.position.x = t*  -0.0008;
camera.position.y = t*  -0.4;
camera.position.z = t*  0.1;


}


//eventlistner set and it triggers movecam function
document.body.onscroll= movecam;









let z=0;
let c=0;
//this function kind of refreshes the browser so we can call the renderer method on loop
//function made
function animate(){
  requestAnimationFrame(animate);
  
  //each toruss has property of rotation
  // toruss.rotation.x +=0.001;
  // toruss.rotation.y +=0.002;
  // toruss.rotation.z +=0.005;

  if(camera.position.x<1){camera.position.x =1;}
  if(camera.position.y<1){camera.position.y =1;}
  if(camera.position.z<1){camera.position.z =1;}

if (c==0){z+=0.1;ptlight1.position.set(30,30,z);}
if(c==1){z-=0.1;ptlight1.position.set(30,30,z);}
if (z>50){c=1;}
if(z<10){c=0;}


// lmodel.scene.rotation.y += 0.001;



  //updates the controller input from mouse so thaat we can move in 3d
  xontrols.update();


  renderer.render(scene,camera);
}










//function called
animate();