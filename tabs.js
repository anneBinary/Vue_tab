// 注册tabs组件
Vue.component('tabs',{
	template: '\
		<div class="tabs"> \
			<div class="tabs-bar"> \
				<!-- 标签页标题,这里要用V-for --> \
			</div> \
			<div class="tabs-content"> \
				<!-- 这里的slot就是嵌套的Pane --> \
				<slot></slot> \
			</div> \
		</div> \
		'
})