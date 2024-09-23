/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "PaleBlue": "hsl(225, 100%, 94%)",
        "BrightBlue": "hsl(245, 75%, 52%)", // color de boton
        "VeryPaleBlue": "hsl(225, 100%, 98%)",
        "DesaturatedBlue": "hsl(224, 23%, 55%)",
        "DarkBlue": "hsl(223, 47%, 23%)",
        'colorHover':"#766CF1"
      },

      fontFamily:{
        "RedHad": ["Red Hat Display", "sans-serif"]
      },

      backgroundImage:{
        'iconMusic':"url('./images/icon-music.svg')",
        'ilustracion': "url('./images/illustration-hero.svg')",
        'Bdestokp': "url('./images/pattern-background-desktop.svg')",
        'Bmobile': "url('./images/pattern-background-mobile.svg')"
        
      },

      boxShadow:{
        "box-shadow": "3px 18px 19px -9px rgba(0,0,0,0.29)"
      },

      screens:{
        'pq':"375px"
      },

      spacing:{
        '272':"17rem"
      }
    

    },
  },
  plugins: [],
}
