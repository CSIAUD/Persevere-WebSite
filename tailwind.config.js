module.exports = {
  content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {
      listStyleType: {
        dot: 'disc',
        tiret: "'- '"
      },
      backgroundImage: {
        'wood': "url('/assets/imgs/wood.jpg')",
        'entrance': "url('/assets/imgs/entrance.jpg')",
        'karine': "url('/assets/imgs/karine_cheval.jpg')",
        'prestas': "url('/assets/imgs/prestas/work/first.jpg')"
      },
      fontFamily: {
        'oswald': ['Oswald', 'sans-serif'],
        'baskerville': ['Libre Baskerville', 'serif'],
        'playfair': ['Playfair Display', 'serif'],
        'helvetica': ['helvetica-w01-bold', 'helvetica-w02-bold', 'helvetica-lt-w10-bold', 'sans-serif']
      },
      colors: {
        'dark':         "rgb(18  ,14  ,1)",
        'citation-bg':  "rgb(55  ,45  ,29)",
        'brown':        "rgb(101 ,86  ,78)",
        'light-brown':  "rgb(159 ,140 ,130)",
        'green':        "rgb(174 ,198 ,118)",
        'beige':        "rgba(175 ,166 ,154, 0.7)",
        'light-green':  "rgb(213 ,227 ,181)",
        'darkWhite':    "rgb(219 ,208 ,193)",
        'backStage':    "rgb(251 ,243 ,232)"
      },
      spacing:{
        '1/20': "5%",
        '2/20': "10%",
        '3/20': "15%",
        '4/20': "20%",
        '5/20': "25%",
        '6/20': "30%",
        '7/20': "35%",
        '8/20': "40%",
        '9/20': "45%",
        '10/20': "50%",
        '11/20': "55%",
        '12/20': "60%",
        '13/20': "65%",
        '14/20': "70%",
        '15/20': "75%",
        '16/20': "80%",
        '17/20': "85%",
        '18/20': "90%",
        '19/20': "95%",
      },
      gap: {
        '1/20': "5%",
        '2/20': "10%",
        '3/20': "15%",
        '4/20': "20%",
        '5/20': "25%",
        '6/20': "30%",
        '7/20': "35%",
        '8/20': "40%",
        '9/20': "45%",
        '10/20': "50%",
        '11/20': "55%",
        '12/20': "60%",
        '13/20': "65%",
        '14/20': "70%",
        '15/20': "75%",
        '16/20': "80%",
        '17/20': "85%",
        '18/20': "90%",
        '19/20': "95%",
      },
      width: {
        'screen': '100vw',
        'formulas': '485px',
      },
      height: {
        'middleScreen': '50vh',
      },
      inset: {
        'full': '100%',
        '1/20': "5%",
        '2/20': "10%",
        '3/20': "15%",
        '4/20': "20%",
        '5/20': "25%",
        '6/20': "30%",
        '7/20': "35%",
        '8/20': "40%",
        '9/20': "45%",
        '10/20': "50%",
        '11/20': "55%",
        '12/20': "60%",
        '13/20': "65%",
        '14/20': "70%",
        '15/20': "75%",
        '16/20': "80%",
        '17/20': "85%",
        '18/20': "90%",
        '19/20': "95%",
      },
      zIndex: {
        'header': '100',
      },
      transformOrigin: {
        'center-right': "center right",
        'top-center': "topn center",
        'tRect': "10% 10%",
        'bRect': "10% 90%"
      },
      dropShadow: {
        'text': '2px 3px 4px rgba(0, 0, 0, 0.4)',
        'work': '0 10px 0px 0 red',
        'work2': '30px 10px 0px #4444dd',
        'blackTitle': [
          '1px 1px 1px rgba(255, 255, 255, 0.6)',
          '-1px -1px 1px rgba(0, 0, 0, 0.6)'
        ],
        'ecuries': [
            '1px 1px 1px rgba(255, 255, 255, 0.6)',
            '-1px -1px 1px rgba(0, 0, 0, 0.6)'
        ]
      },
      boxShadow: {
        'team': '0 2px 9px 5px rgba(0, 0, 0, 0.53)',
        'prod': '0 1px 3px rgba(0, 0, 0, 0.5)',
        'pWork': ['0 1px 3px rgba(0, 0, 0, 0.5)','0.74px 0.67px 8px 2px rgba(0, 0, 0, 0.5)'],
      },
      screens: {
        '2xl': '1540px',
      },
    },
  },
  plugins: [require('tailwindcss-neumorphism')]
}