import 'ant-design-vue/dist/reset.css'
import {
  Space,
  Typography,
  Button,
  Modal,
  Popover,
  Popconfirm,
  Form,
  Input,
  AutoComplete,
  Menu,
  Layout,
  Table,
  Pagination,
  Radio,
  Tooltip,
  Avatar,
  Dropdown,
  Divider,
  Upload,
  ConfigProvider,
  Breadcrumb,
  Select,
  Switch,
  Transfer,
  Checkbox,
  DatePicker,
  Badge,
  CheckboxGroup,
  RadioGroup,
  Drawer,
  Tabs,
  Row,
  Col,
  InputNumber,
  Timeline,
  TimelineItem,
  Image,
  Spin,
  Rate,
  Tag,
  Tree,
  Anchor,
  Carousel
} from 'ant-design-vue'

import locale from 'ant-design-vue/es/date-picker/locale/zh_CN'

DatePicker.props.local = locale

Table.props.locale.default = {
  emptyText: '​ ​',
  filterReset: '重置',
  filterConfirm: '确定'
}

export default app => {
  app.use(Space)
  app.use(Typography)
  app.use(Button)
  app.use(Modal)
  app.use(Popover)
  app.use(Popconfirm)
  app.use(Form)
  app.use(AutoComplete)
  app.use(Input)
  app.use(Menu)
  app.use(Layout)
  app.use(Table)
  app.use(Pagination)
  app.use(Radio)
  app.use(Tree)
  app.use(Anchor)
  app.use(Tooltip)
  app.use(Divider)
  app.use(Avatar)
  app.use(Dropdown)
  app.use(Upload)
  app.use(Rate)
  app.use(Tag)
  app.use(ConfigProvider)
  app.use(Breadcrumb)
  app.use(Select)
  app.use(Switch)
  app.use(Transfer)
  app.use(Checkbox)
  app.use(DatePicker)
  app.use(Badge)
  app.use(Drawer)
  app.use(CheckboxGroup)
  app.use(RadioGroup)
  app.use(Tabs)
  app.use(Row)
  app.use(Col)
  app.use(InputNumber)
  app.use(Timeline)
  app.use(TimelineItem)
  app.use(Image)
  app.use(Spin)
  app.use(Carousel)
  // app.config.globalProperties.$message = message
  // app.config.globalProperties.$modConfirm = Modal.confirm
}
