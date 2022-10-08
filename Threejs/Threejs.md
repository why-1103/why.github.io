## Threejs 笔记

#### 三个基本对象
场景（scene）：布景空间  
相机（camera）：拍摄镜头  
渲染器（renderer）：把拍摄好的场景转换成胶卷  
``` js
var scene = new THREE.Scene();
// 视角（field of view）、相机拍摄面的长宽比（aspect ratio）、近裁剪面（near clipping plane） 、远裁剪面（far clipping plane）
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
// 设置渲染空间的尺寸
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
```