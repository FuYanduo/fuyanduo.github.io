// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "post-不自律才能自由",
        
          title: "不自律才能自由",
        
        description: "生活就是问题叠着问题，你能做的就是直面问题",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/%E4%B8%8D%E8%87%AA%E5%BE%8B%E6%89%8D%E8%83%BD%E8%87%AA%E7%94%B1/";
          
        },
      },{id: "post-转载读书群里老师介绍的教员笔记",
        
          title: "转载读书群里老师介绍的教员笔记",
        
        description: "读书群中的笔记，感觉很好，于是转载过来了",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/%E8%BD%AC%E8%BD%BD%E8%AF%BB%E4%B9%A6%E7%BE%A4%E9%87%8C%E8%80%81%E5%B8%88%E4%BB%8B%E7%BB%8D%E7%9A%84%E6%95%99%E5%91%98%E7%AC%94%E8%AE%B0/";
          
        },
      },{id: "post-读后感之原子习惯",
        
          title: "读后感之原子习惯",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/%E8%AF%BB%E5%90%8E%E6%84%9F%E4%B9%8B%E5%8E%9F%E5%AD%90%E4%B9%A0%E6%83%AF/";
          
        },
      },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-增肌-减脂和营养素",
        
          title: "增肌、减脂和营养素",
        
        description: "主要来源于哔哩哔哩流传的一个陈康的视频",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/%E5%A2%9E%E8%82%8C%E5%87%8F%E8%84%82%E5%92%8C%E8%90%A5%E5%85%BB%E7%B4%A0/";
          
        },
      },{id: "post-如何做一篇学术论文笔记",
        
          title: "如何做一篇学术论文笔记？",
        
        description: "如何做一篇学术论文笔记",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/%E5%A6%82%E4%BD%95%E5%81%9A%E4%B8%80%E7%AF%87%E5%AD%A6%E6%9C%AF%E8%AE%BA%E6%96%87%E7%AC%94%E8%AE%B0/";
          
        },
      },{id: "post-12小时足够把想做的事情做一遍",
        
          title: "12小时足够把想做的事情做一遍",
        
        description: "迷茫的眼神，空洞的目光",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/12%E5%B0%8F%E6%97%B6%E8%B6%B3%E5%A4%9F%E6%8A%8A%E6%83%B3%E5%81%9A%E7%9A%84%E4%BA%8B%E6%83%85%E5%81%9A%E4%B8%80%E9%81%8D/";
          
        },
      },{id: "post-硕士毕业后的一年-如果重回那个十字路口",
        
          title: "硕士毕业后的一年 - 如果重回那个十字路口",
        
        description: "大脑中回想起佟湘玉的经典台词：饿错咧 饿真滴错咧 ...",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/%E7%A1%95%E5%A3%AB%E6%AF%95%E4%B8%9A%E5%90%8E%E7%9A%84%E4%B8%80%E5%B9%B4-%E5%A6%82%E6%9E%9C%E9%87%8D%E5%9B%9E%E9%82%A3%E4%B8%AA%E5%8D%81%E5%AD%97%E8%B7%AF%E5%8F%A3/";
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "post-专心专注",
        
          title: "专心专注",
        
        description: "天空是蔚蓝色",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/%E4%B8%93%E5%BF%83%E4%B8%93%E6%B3%A8/";
          
        },
      },{id: "post-岁月极美",
        
          title: "岁月极美",
        
        description: "岁月极美，在于它的必然流逝。",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/%E5%B2%81%E6%9C%88%E6%9E%81%E7%BE%8E/";
          
        },
      },{id: "post-你的临终遗言是什么",
        
          title: "你的临终遗言是什么",
        
        description: "林晨问：“你的临终遗言是什么”",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/%E4%BD%A0%E7%9A%84%E4%B8%B4%E7%BB%88%E9%81%97%E8%A8%80%E6%98%AF%E4%BB%80%E4%B9%88/";
          
        },
      },{id: "post-偶尔荒废-偶尔孤独",
        
          title: "偶尔荒废，偶尔孤独",
        
        description: "突然想把这几年的所想所感都记录下来。",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/%E5%81%B6%E5%B0%94%E8%8D%92%E5%BA%9F-%E5%81%B6%E5%B0%94%E5%AD%A4%E7%8B%AC/";
          
        },
      },{id: "post-哦-为什么要开始减肥呢",
        
          title: "哦，为什么要开始减肥呢",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/%E5%93%A6-%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E5%BC%80%E5%A7%8B%E5%87%8F%E8%82%A5%E5%91%A2/";
          
        },
      },{id: "post-你走后-保定又下雨了",
        
          title: "你走后，保定又下雨了",
        
        description: "本科做公众号的学长毕业后，又迎来了雨季",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2019/%E4%BD%A0%E8%B5%B0%E5%90%8E-%E4%BF%9D%E5%AE%9A%E5%8F%88%E4%B8%8B%E9%9B%A8%E4%BA%86/";
          
        },
      },{id: "post-开始跑步的一年",
        
          title: "开始跑步的一年",
        
        description: "开始跑步的第一年",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2019/%E5%BC%80%E5%A7%8B%E8%B7%91%E6%AD%A5%E7%9A%84%E4%B8%80%E5%B9%B4/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-i-will-pursue-my-eng-d-degree-at-nankai-university-a-new-journey-everything-will-be-ok-️",
          title: 'I will pursue my Eng.D degree at Nankai University! A New Journey! Everything...',
          description: "",
          section: "News",},{id: "news-a-paper-of-password-managers-autofill-feature-is-accepted-by-acsac-2024",
          title: 'A paper of password managers’ autofill feature is accepted by ACSAC 2024! 🥳🎉...',
          description: "",
          section: "News",},{id: "news-a-paper-of-password-managers-protocol-analysis-is-accepted-by-ieee-s-amp-amp-p-2025-congratulations-to-my-collegues",
          title: 'A paper of password managers’ protocol analysis is accepted by IEEE S&amp;amp;amp;P 2025!...',
          description: "",
          section: "News",},{id: "news-a-long-journey-to-hawaii-usa",
          title: 'A Long Journey to Hawaii, USA',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024-12-15-acsacconf/";
            },},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("//feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
