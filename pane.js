// 1.注册Pane组件
// 2.控制标签页内容的显示与隐藏需要增加v-show指令控制
Vue.component('pane',{
	template: '\
		<div class="pane" v-show="show">\
			<slot></slot>\
		</div>',
	data: function () {
		return {
			show: true
		}
	}	
})