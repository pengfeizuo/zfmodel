import Vue from 'vue'
import { 
    Button ,
    Message,
    MessageBox,
    Breadcrumb,
    BreadcrumbItem,
    Container,
    Aside,
    Main,
    Menu,
    Submenu,
    MenuItem,
    Tabs,
    TabPane,
    Table,
    TableColumn,
     Row,
     Col,
     Pagination

     
} from 'element-ui'

Vue.use(Button)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Container)
Vue.use( Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Col)
Vue.use(Row)
Vue.use(Pagination)

Vue.prototype.$message = Message
Vue.prototype.$confirm= MessageBox.confirm