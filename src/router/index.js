import Vue from "vue"
import Router from "vue-router"

import Archives from "@/pages/Archives/archives.vue"
import Leading from "@/pages/Archives/leading.vue"
import Organization from "@/pages/Archives/organization.vue"
import Home from "@/pages/Home/home.vue"
import Forum from "@/pages/Forum/forum.vue"
import ForumClassroom from "@/pages/Forum/ForumClassroom.vue"
import ForumOutside from "@/pages/Forum/ForumOutside.vue"
import ForumWarning from "@/pages/Forum/ForumWarning.vue"
import Report from "@/pages/Report/report.vue"
import ReportInternet from "@/pages/Report/ReportInternet.vue"
import ReportQr from "@/pages/Report/ReportQr.vue"
import ReportEvaluation from "@/pages/Report/ReportEvaluation.vue"
import Questionnaire from "@/pages/Report/Questionnaire.vue"
import JobEvaluation from "@/pages/Report/JobEvaluation.vue"
import Risk from "@/pages/Risk/Risk.vue"
import SiXiang from "@/pages/Risk/SiXiang.vue"
import ZhiDu from "@/pages/Risk/ZhiDu.vue"
import ZhiZe from "@/pages/Risk/ZhiZe.vue"
import PartyDiscipline from "@/pages/PartyDiscipline/PartyDiscipline.vue"
import FenLei from "@/pages/PartyDiscipline/FenLei.vue"
import Search from "@/pages/PartyDiscipline/Search.vue"
import XiaoTieShi from "@/pages/PartyDiscipline/XiaoTieShi.vue"
import MakeInspectionTour from "@/pages/MakeInspectionTour/MakeInspectionTour.vue"
import BeiJing from "@/pages/MakeInspectionTour/BeiJing.vue"
import ZhongYang from "@/pages/MakeInspectionTour/ZhongYang.vue"
import JiTuan from "@/pages/MakeInspectionTour/JiTuan.vue"
import Investigate from "@/pages/Investigate/Investigate.vue"
import ZhiJi from "@/pages/Investigate/ZhiJi.vue"
import ZhiFa from "@/pages/Investigate/ZhiFa.vue"
import DangJi from "@/pages/Investigate/DangJi.vue"
import Abstractted from "@/pages/Abstractted/Abstractted.vue"

import Search1 from "@/pages/PartyDiscipline/Search1.vue"


import SX from '@/pages/Risk/SX.vue'


import DZ from '@/pages/PartyDiscipline/DZ.vue'
import SearchDetail from '@/pages/PartyDiscipline/SearchDetail.vue'
import XtsDetail from '@/pages/PartyDiscipline/XtsDetail.vue'
import Bj1 from '@/pages/MakeInspectionTour/Bj1.vue'
import Jt1 from '@/pages/MakeInspectionTour/Jt1.vue'
import Detail1 from '@/pages/Investigate/Detail1.vue'

import DetailText from "@/pages/Detail-text/DetailText.vue"
import DetailStudy from "@/pages/Detail-text/DetailStudy.vue"
import DetailArmod from "@/pages/Detail-text/DetailArmod.vue"
import DetailEducation from "@/pages/Detail-text/DetailEducation.vue"
import DetailBanner from "@/pages/Detail-text/DetailBanner.vue"
import {store} from '@/store/store.js'
Vue.use(Router)

export default new Router({
  routes: [{
    name: "archives",
    path: "/archives",
    component: Archives,
    redirect: "/archives/leading",
    children: [{
      path: "leading",
      name: "leading",
      component: Leading
    },
    {
      path: "organization",
      name: "organization",
      component: Organization
    }
    ]
  },
  {
    name: "DetailText",
    path: "/DetailText",
    component: DetailText
  },
  {
    name: "DetailArmod",
    path: "/DetailArmod",
    component: DetailArmod
  },
  {
    name: "DetailStudy",
    path: "/DetailStudy",
    component: DetailStudy
  },
  {
    name: "DetailEducation",
    path: "/DetailEducation",
    component: DetailEducation
  },
  {
    name: "DetailBanner",
    path: "/DetailBanner",
    component: DetailBanner
  },
  {
    name: "home",
    path: "/home",
    component: Home
  },
  {
    name: "forum",
    path: "/forum",
    component: Forum,
    redirect: "/forum/forumClassroom",
    children: [{
      path: "forumClassroom",
      name: "forumClassroom",
      component: ForumClassroom,
      // beforeEnter: (to, from, next) => {
      //   // ...
      //   if (from.name === "TextEditor" || from.name === "BianJi") {
      //     store.commit("PortalManagement/HOME_ACTIVE", "second")
      //     // console.log(from.name,"子项进来")
      //   } else {
      //     store.commit("PortalManagement/HOME_ACTIVE", "first")
      //     // console.log(from.name,"外部过来")
      //   }
      //   next()
      // }
    },
    {
      path: "forumOutside",
      name: "forumOutside",
      component: ForumOutside,
      beforeEnter: (to, from, next) => {
        // ...
        if (from.name === "DetailArmod") {
          store.commit("SET_OUTSIDE_ACTIVE", "second")
          // console.log(from.name,"子项进来")
        } else {
          store.commit("SET_OUTSIDE_ACTIVE", "first")
          // console.log(from.name,"外部过来")
        }
        next()
      }
    },
    {
      path: "forumWarning",
      name: "forumWarning",
      component: ForumWarning
    },

    ]
  },
  {
    name: "report",
    path: "/report",
    component: Report,
    redirect: "/report/reportInternet",
    children: [{
      path: "reportInternet",
      name: "reportInternet",
      component: ReportInternet
    },
    {
      path: "reportQr",
      name: "reportQr",
      component: ReportQr
    },
    {
      path: "reportEvaluation",
      name: "reportEvaluation",
      component: ReportEvaluation,
    },
    ]
  },
  {
    name: "jobevaluation",
    path: "/jobevaluation",
    component: JobEvaluation
  },
  {
    name: "questionnaire",
    path: "/questionnaire",
    component: Questionnaire
  },
  {
    name: "Risk",
    path: "/Risk",
    redirect: '/Risk/SiXiang',
    component: Risk,

    children: [{
      path: '/Risk/SiXiang',
      name: 'SiXiang',
      component: SiXiang,
      props: true
    },
    {
      path: '/Risk/ZhiDu',
      name: 'ZhiDu',
      component: ZhiDu
    },
    {
      path: '/Risk/ZhiZe',
      name: 'ZhiZe',
      component: ZhiZe
    }
    ]
  },
  {
    name: "PartyDiscipline",
    path: "/PartyDiscipline",
    redirect: 'PartyDiscipline/FenLei',
    component: PartyDiscipline,
    children: [{
      path: '/PartyDiscipline/FenLei',
      name: 'FenLei',
      component: FenLei
    },
    {
      path: '/PartyDiscipline/Search',
      name: 'Search',
      component: Search
    },
    {
      path: '/PartyDiscipline/Search1',
      name: 'Search1',
      component: Search1
    },
    {
      path: '/PartyDiscipline/XiaoTieShi',
      name: 'XiaoTieShi',
      component: XiaoTieShi
    }
    ]

  },
  {
    name: "MakeInspectionTour",
    path: "/MakeInspectionTour",
    redirect: '/MakeInspectionTour/ZhongYang',
    component: MakeInspectionTour,
    children: [{
      path: '/MakeInspectionTour/BeiJing',
      name: 'BeiJing',
      component: BeiJing
    },
    {
      path: '/MakeInspectionTour/ZhongYang',
      name: 'ZhongYang',
      component: ZhongYang
    },
    {
      path: '/MakeInspectionTour/JiTuan',
      name: 'JiTuan',
      component: JiTuan
    }
    ]
  },
  {
    name: "Investigate",
    path: "/Investigate",
    redirect: '/Investigate/ZhiJi',
    component: Investigate,
    children: [{
      path: '/Investigate/ZhiJi',
      name: 'ZhiJi',
      component: ZhiJi
    },
    {
      path: '/Investigate/ZhiFa',
      name: 'ZhiFa',
      component: ZhiFa
    },
    {
      path: '/Investigate/DangJi',
      name: 'DangJi',
      component: DangJi
    }
    ]
  },
  {
    name: "Abstractted",
    path: "/Abstractted",
    component: Abstractted
  },
  {
    name: "Text",
    path: "/Text",
    component: Text
  },
 
  // 思想详情
  {
    name: "SX",
    path: "/SX/:id",
    component: SX,
    props: true
  },

  // 党章详情
  {
    name: "DZ",
    path: "/DZ",
    component: DZ
  },
  {
    name: "SearchDetail",
    path: "/SearchDetail",
    component: SearchDetail
  },
  {
    name: "XtsDetail",
    path: "/XtsDetail",
    component: XtsDetail
  },
  {
    path: "*",
    redirect: "/home"
  }






  ]
})
