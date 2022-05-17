(function(t){"use strict";var e=t.getOptions(),n=e.plotOptions,a=t.seriesTypes,i=t.merge,o=function(){},r=t.each;n.funnel=i(n.pie,{center:["50%","50%"],width:"90%",neckWidth:"30%",height:"100%",neckHeight:"25%",dataLabels:{connectorWidth:1,connectorColor:"#606060"},size:!0,states:{select:{color:"#C0C0C0",borderColor:"#000000",shadow:!1}}}),a.funnel=t.extendClass(a.pie,{type:"funnel",animate:o,translate:function(){var t,e,n,a,i,s,h,l,c,p,d,u=function(t,e){return/%$/.test(t)?e*parseInt(t,10)/100:parseInt(t,10)},g=0,f=this,b=f.chart,w=b.plotWidth,y=b.plotHeight,C=0,L=f.options,k=L.center,W=u(k[0],w),v=u(k[0],y),A=u(L.width,w),H=u(L.height,y),P=u(L.neckWidth,w),X=u(L.neckHeight,y),m=H-X,T=f.data,Y="left"===L.dataLabels.position?1:0;f.getWidthAt=e=function(t){return t>H-X||H===X?P:P+(H-X-t)/(H-X)*(A-P)},f.getX=function(t,n){return W+(n?-1:1)*(e(t)/2+L.dataLabels.distance)},f.center=[W,v,H],f.centerX=W,r(T,(function(t){g+=t.y})),r(T,(function(r){d=null,a=g?r.y/g:0,s=v-H/2+C*H,c=s+a*H,t=e(s),i=W-t/2,h=i+t,t=e(c),l=W-t/2,p=l+t,s>m?(i=l=W-P/2,h=p=W+P/2):c>m&&(d=c,t=e(m),l=W-t/2,p=l+t,c=m),n=["M",i,s,"L",h,s,p,c],d&&n.push(p,d,l,d),n.push(l,c,"Z"),r.shapeType="path",r.shapeArgs={d:n},r.percentage=100*a,r.plotX=W,r.plotY=(s+(d||c))/2,r.tooltipPos=[W,r.plotY],r.slice=o,r.half=Y,C+=a})),f.setTooltipPoints()},drawPoints:function(){var t=this,e=t.options,n=t.chart,a=n.renderer;r(t.data,(function(n){var i=n.graphic,o=n.shapeArgs;i?i.animate(o):n.graphic=a.path(o).attr({fill:n.color,stroke:e.borderColor,"stroke-width":e.borderWidth}).add(t.group)}))},sortByAngle:o,drawDataLabels:function(){var t,e,n,i,o,r=this.data,s=this.options.dataLabels.distance,h=r.length;this.center[2]-=2*s;while(h--)n=r[h],t=n.half,e=t?1:-1,o=n.plotY,i=this.getX(o,t),n.labelPos=[0,o,i+(s-5)*e,o,i+s*e,o,t?"right":"left",0];a.pie.prototype.drawDataLabels.call(this)}})})(Highcharts);