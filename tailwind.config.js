module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false,
  theme: {
    fontFamily: {
      sans: ['Noto Sans TC', '微軟正黑體', 'sans-serif'], //改預設字體
      zcool: ['ZCOOL XiaoWei', 'sans-serif']
    },
    boxShadow: {
      // ....沒法用擴充方式新增如果要沿用得先載入
      'customer': '0 3px 6px 0 rgba(0, 0, 0, 0.2)',
    },
    screens: {
      sm: '640px',
      md: '992px',
      lg: '1200px',
      xl: '1460px',
    },
    spacing: {
       // ....沒法用擴充方式新增如果要沿用得先載入
      '40p': '40%',
      '75p': '75%',
      '100p': '100%',
      '120p': '120%',
      '136p': '136%',
    },
    extend:{ 
      // ....擴充
      margin: {
        '30':　'120px'
      },
      spacing: {
        'pb-40p': '40%'
      },
      colors: {
        customer:{
          primary: '#6A483E',
          secondary: '#EC964B',
          'light-primary' : '#B28F85',
          gray: '#F2F2F2',
          black: '#433D3B',
        }
      },
      backgroundImage: theme => ({
        'index-partner': "url('/image/index/3-01.jpg')",
        'index-investor-1': "url('/image/index/4-01.jpg')",
        'index-investor-2': "url('/image/index/4-02.jpg')",
        'index-investor-3': "url('/image/index/4-03.jpg')",
      }),
      height: {
        '600px': '600px',
        '400px': '400px',
        'full-72px': 'calc(100% - 72px)'
      },
      lineHeight: {
        '0': '0',
      },
      fontSize: {
        'pc-h1': ['45px','76.5px'],
        'pc-h2': ['30px','51px'],
        'pc-h3': ['28px','47px'],
        'pc-h4': ['20px','34px'],
        'pc-h5': ['14px','24px'],
        'pc-h6': ['12px','20px'],
        'pc-p': ['18px','30px'],
        'mb-h1': ['32px','54px'],
        'mb-h2': ['28px','47px'],
        'mb-h3': ['22px','37px'],
        'mb-h4': ['18px','30px'],
        'mb-h5': ['12px','20px'],
        'mb-h6': ['12px','20px'],
        'mb-p': ['16px','27px'],
      },
      zIndex: {
        '-1': '-1',
      },
      width: {
        '40': '160px',
        '50': '200px',
        '3col': 'calc((100% - 80px)/3)',
        '2col': 'calc((100% - 40px)/2)',
      }
    }
  },
  variants: {
    // 互動效果
    extend: {
      opacity: ['disabled'],
      pointerEvents: ['disabled'],
      backgroundColor: ['active','disabled'],
      padding: ['responsive', 'last','first'],
      margin: ['responsive', 'last','first'],
      maxHeight: ['focus'],
      divideColor: ['group-hover'],
      textColor: ['group-hover'],
    }
  }
}