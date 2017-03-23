 <template>
 <div>
    <input type="text" v-model="name" />
    <label v-for="cb in inputs">
        <input type="checkbox" :value="cb.value" v-model="checkbox" />{{cb.name}}
    </label>   <br/>
    <div> <!--下面2个是一样的效果-->
     {{checkbox||json}}<br/>
    {{getCheckBoxes}}<br>
    </div>
    <div><!--下面2个是一样的效果-->
        {{getName}}<br/>
        {{name}}
    </div>
    <div>
    	{{$route.params.id}}
    </div>
   </div>
</template>
<script>
	export default {
	        data () {
				return {
	            name: 'testName',
	            inputs: ['JAVA', 'C#', 'RUBY'].map(function (el, index) {
					return {value: index, name: el};
				}),
	            checkbox: ['0']
	            };
	            // this.change()
	        },
	        created () {
				// 组件创建完后获取数据，这里和1.0不一样，改成了这个样子
				console.log(this.$route.params.id);
			},
	        watch: {
	            //	检测属性变化
	            'name': function (newValue, oldValue) {
	                 console.log('name has changed ', newValue, oldValue);
	            }
	        },
	        computed: {
	            getCheckBoxes: function () {
	                console.log('run getCheckBoxes');
	                return this.checkbox.join(',');
	            },
	            getName: function () {
	                console.log('run getName');
	                this.checkbox.join(',');
	                console.log('getName use checkbox');
	                return this.name;
	            }
	            // this.change()
	        },
	        methods: {
				change: function () {
					console.log(this.$router);
				}
	        }
	};
</script>
