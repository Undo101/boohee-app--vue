
export default {
  day: [{
    id: 0,
    count: 0,
    isActive:true,
    com:false
  },
  {
    id: 1,
    count: 0,
    isActive:true,
    com:false
  },
  {
    id: 2,
    count: 0,
    isActive:true,
    com:false
  },
  {
    id: 3,
    count: 0,
    isActive:true,
    com:false
  },
  {
    id: 4,
    count: 0,
    isActive:true,
    com:false
  },
  {
    id: 5,
    count: 0,
    isActive:true,
    com:false
  },
  // {
  //   id: 6,
  //   count: 0,
  //   isActive:true,
  //   com:false
  // }
  ],
  chooses:[
    {id:0, title:'常见', dark:true, light:true, isActive:true,linkTo:'/common',},
    {id:1, title:'收藏', dark:true, light:false, isActive:false,linkTo:'/other',isSecond:false},
    {id:2, title:'自定义', dark:true, light:false, isActive:false,linkTo:'/other',isThird:false},
    {id:3, title:'我的上传', dark:true, light:false, isActive:false,linkTo:'/other',},
    {id:4, title:'我的菜肴', dark:true, light:false, isActive:false,linkTo:'/other',}
      ],
  foods:[
    {id:1,pic:'../../static/images/hotrice.png',desc:'米饭',fat:'116'},
    {id:1,pic:'../../static/images/egg.jpg',desc:'鸡蛋',fat:'144'},
    {id:1,pic:'../../static/images/bun.png',desc:'馒头',fat:'233'},
    {id:1,pic:'../../static/images/yoghourt.jpg',desc:'酸奶',fat:'72'},
    {id:1,pic:'../../static/images/cuke.jpg',desc:'黄瓜',fat:'16'},
    {id:1,pic:'../../static/images/apple.jpg',desc:'苹果',fat:'54'},
    {id:1,pic:'../../static/images/tomato.jpg',desc:'番茄',fat:'20'},
    {id:1,pic:'../../static/images/bread.jpg',desc:'面包',fat:'313'},
    {id:1,pic:'../../static/images/chicken.png',desc:'鸡胸肉',fat:'133'},
    {id:1,pic:'../../static/images/honey.png',desc:'蜂蜜',fat:'321'},
    {id:1,pic:'../../static/images/maize.jpg',desc:'玉米',fat:'112'},
    {id:1,pic:'../../static/images/milk.jpg',desc:'牛奶',fat:'54'},
    {id:1,pic:'../../static/images/steamedbun.jpg',desc:'包子',fat:'227'}
  ],
  itemones:[
    {id:1,isChecked:false},
    {id:2,isChecked:false},
    {id:3,isChecked:false},
    {id:4,isChecked:false},
    {id:5,isChecked:false},
    {id:6,isChecked:false},
    {id:7,isChecked:false}
  ],
  isActive:true,
  finish:0,
  per:0,
  isChecked:false,
  fat:1595,
  todaydone:false,
  date:Date
}

