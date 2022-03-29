<template>
  <div class="wrapper">
      <!-- 1. 无论是否设置click: true，button都可以点击 -->
      <button @click='btnClick'>按钮</button>
      <!-- 2. 必须设置click: true，div才能监听点击 -->
      <div @click='divClick'>哈哈哈哈</div>
    <ul class="content">
      <li>分级列表1</li>
      <li>分级列表2</li>
      <li>分级列表3</li>
      <li>分级列表4</li>
      <li>分级列表5</li>
      <li>分级列表6</li>
      <li>分级列表7</li>
      <li>分级列表8</li>
      <li>分级列表9</li>
      <li>分级列表10</li>
      <li>分级列表11</li>
      <li>分级列表12</li>
      <li>分级列表13</li>
      <li>分级列表14</li>
      <li>分级列表15</li>
      <li>分级列表16</li>
      <li>分级列表17</li>
      <li>分级列表18</li>
      <li>分级列表19</li>
      <li>分级列表20</li>
      <li>分级列表21</li>
      <li>分级列表22</li>
      <li>分级列表23</li>
      <li>分级列表24</li>
      <li>分级列表25</li>
      <li>分级列表26</li>
      <li>分级列表27</li>
      <li>分级列表28</li>
      <li>分级列表29</li>
      <li>分级列表30</li>
      <li>分级列表31</li>
      <li>分级列表32</li>
      <li>分级列表33</li>
      <li>分级列表34</li>
      <li>分级列表35</li>
      <li>分级列表36</li>
      <li>分级列表37</li>
      <li>分级列表38</li>
      <li>分级列表39</li>
      <li>分级列表40</li>
      <li>分级列表41</li>
      <li>分级列表42</li>
      <li>分级列表43</li>
      <li>分级列表44</li>
      <li>分级列表45</li>
      <li>分级列表46</li>
      <li>分级列表47</li>
      <li>分级列表48</li>
      <li>分级列表49</li>
      <li>分级列表50</li>
      <li>分级列表51</li>
      <li>分级列表52</li>
      <li>分级列表53</li>
      <li>分级列表54</li>
      <li>分级列表55</li>
      <li>分级列表56</li>
      <li>分级列表57</li>
      <li>分级列表58</li>
      <li>分级列表59</li>
      <li>分级列表60</li>
      <li>分级列表61</li>
      <li>分级列表62</li>
      <li>分级列表63</li>
      <li>分级列表64</li>
      <li>分级列表65</li>
      <li>分级列表66</li>
      <li>分级列表67</li>
      <li>分级列表68</li>
      <li>分级列表69</li>
      <li>分级列表70</li>
      <li>分级列表71</li>
      <li>分级列表72</li>
      <li>分级列表73</li>
      <li>分级列表74</li>
      <li>分级列表75</li>
      <li>分级列表76</li>
      <li>分级列表77</li>
      <li>分级列表78</li>
      <li>分级列表79</li>
      <li>分级列表80</li>
      <li>分级列表81</li>
      <li>分级列表82</li>
      <li>分级列表83</li>
      <li>分级列表84</li>
      <li>分级列表85</li>
      <li>分级列表86</li>
      <li>分级列表87</li>
      <li>分级列表88</li>
      <li>分级列表89</li>
      <li>分级列表90</li>
      <li>分级列表91</li>
      <li>分级列表92</li>
      <li>分级列表93</li>
      <li>分级列表94</li>
      <li>分级列表95</li>
      <li>分级列表96</li>
      <li>分级列表97</li>
      <li>分级列表98</li>
      <li>分级列表99</li>
      <li>分级列表100</li>
    </ul>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: 'Category',
    data() {
      return {
        scroll: null
      }
    },
    methods: {
      btnClick() {
        console.log('点击按钮');
      },
      divClick() {
        console.log('点击div');
      }
    },
    mounted() {
      this.scroll = new BScroll('.wrapper', {
        probeType: 3,
        pullUpLoad: true,
        click: true
      })
   
      // 2. 上拉加载更多
      this.scroll.on('pullingUp', () => {
        console.log('上拉加载更多');
      })

      // 1. 实时监听位置
      // this.scroll.on('scroll', (position) => {
      //   console.log(position);
      // })
    }
  }
</script>

<style scoped>
  /* 原生实现 */
  /* .content {
    height: 150px;
    background-color: #bfc;
    overflow-y: scroll;
  } */

  /* BScroll实现，拉到最底部时有弹簧效果 */
  .wrapper {
    height: 150px;
    background-color: #bfc;
    overflow: hidden;
  }
</style>