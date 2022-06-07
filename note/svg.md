## SVG使用笔记

### 第一个svg实例
``` html
<?xml version="1.0" standalone="no"?>

<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">

<svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <circle 
    cx="100" 
    cy="50" 
    r="40" 
    stroke="black" 
    stroke-width="2" 
    fill="red"
  />
</svg>
```
![图片](./svg/ing1.svg)

### 嵌入html
使用\<embed>、\<object>、\<iframe>

#### 使用 \<embed> 标签
``` html
<embed src="rect.svg" width="300" height="100" 
type="image/svg+xml"
pluginspage="http://www.adobe.com/svg/viewer/install/" />
```

#### 使用 \<object> 标签

``` html
<object data="rect.svg" width="300" height="100" 
type="image/svg+xml"
codebase="http://www.adobe.com/svg/viewer/install/" />
```

#### 使用 iframe 标签

``` html
<iframe src="rect.svg" width="300" height="100">
</iframe>
```

### 形状
- 矩形 \<rect>
- 圆形 \<circle>
- 椭圆 \<ellipse>
- 线 \<line>
- 折线 \<polyline>
- 多边形 \<polygon>
- 路径 \<path>

#### 矩形 \<rect>
![图片](./svg/rect.svg)
``` html
<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <rect 
    x="20" 
    y="20" 
    rx="20" 
    ry="20"
    width="250" 
    height="250"
    style="fill:blue;stroke-width:1;stroke:pink;fill-opacity:0.1;stroke-opacity:0.9"
  />
</svg>
<!--
  width、height 宽度、高度
  x、y  矩形到浏览器窗口左侧、顶端的距离（px）
  rx 和 ry 圆角。
  style CSS 属性
    fill 填充颜色（rgb 值、颜色名或者十六进制值）
    stroke-width 矩形边框的宽度
    stroke 矩形边框的颜色
    fill-opacity 填充颜色透明度（合法的范围是：0 - 1）
    stroke-opacity 笔触颜色的透明度（合法的范围是：0 - 1）
    opacity 整个元素的透明值（合法的范围是：0 - 1）
-->
```
#### 圆形 \<circle>
![圆形](svg/circle.svg)
``` html
<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="50" r="40" stroke="black" stroke-width="2" fill="red"/>
</svg>
 <!--
  cx 和 cy 圆点的 x 和 y 坐标。如果省略 cx 和 cy，圆的中心会被设置为 (0, 0)
  r 圆的半径。
 -->
```
 