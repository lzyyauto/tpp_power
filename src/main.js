import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import App from './App.vue';
import 'swiper/swiper-bundle.css';
 
const messages = {
  'ru-ru': {
    companyName: "AzerEnergy JOIN STOCK COMPANY",
    address: "Адрес:",
    email: "Эл. почта:",
    phone: "Эл. почта:",
    aboutUsTitle:"О нас",
    scaleTitle:"Масштаб",
    historyTitle:"История",
    repairsTitle:"Ремонт",
    efficiencyTitle:"Эффективность",
    contactTitle:"Свяжитесь с нами",
    aboutUsDescription: "Тепловая электростанция TPP расположена в городе Мингоцяо, важном промышленном городе на северо-западе Азербайджана. Электростанция была построена во времена бывшего Советского Союза. Блок Азербайджанской TPP мощностью 7×300 МВт был построен российской энергетической компанией.",
    scaleDescription: "Азербайджанская TPP – крупнейшая электростанция в Азербайджанской Республике.",
    historyDescription:"Электростанция была построена в период с 1981 по 1990 год. Она состоит из восьми сверхкритических газовых топливных агрегатов мощностью 300 МВт. Установленная мощность электростанции когда-то составляла 50% от общей генерирующей мощности Азербайджана. 1981 и 1990 годы. Основным топливом является природный газ и мазут, которые используются в качестве резервного топлива для обеспечения главным образом столицы и крупных промышленных городов. Реализация этого проекта во многом гарантировала экономический рост и социальное развитие Азербайджана.",
    repairsDescription:"В 2012 году проведен масштабный ремонт электростанции. Масштабные ремонты в основном включали расширение мощности, реконструкцию и техническое обслуживание котлов, паровых турбин, генераторов, систем автоматического управления и систем вспомогательного оборудования. ",
    efficiencyDescription:"После завершения масштабного ремонта электростанции мощность агрегата увеличилась на 10% с первоначального проектного значения 300 МВт до 330 МВт. КПД оказался значительно лучше первоначальных проектных показателей. После расширения и трансформации единичной мощности она не только экономит топливо, но и удовлетворяет растущий спрос на электроэнергию в Азербайджане.",
    },
  'zh-CN': {
    companyName: "阿塞拜疆TPP火力发电站",
    address: "地址:",
    email: "邮箱:",
    phone: "邮箱:",
    aboutUsTitle:"关于我们",
    scaleTitle:"规模",
    historyTitle:"历史",
    repairsTitle:"维修",
    efficiencyTitle:"效率",
    contactTitle:"联系我们",
    aboutUsDescription: "TPP火电站位于阿塞拜疆西北部重要工业城市——明戈桥城，该电站建于前苏联时期，阿塞拜疆TPP火电站7×300MW机组,由俄罗斯动力机械公司完成。",
    scaleDescription: "阿塞拜疆TPP火力发电站，是阿塞拜疆共和国最大的发电厂。",
    historyDescription:"该电站建于1981至1990年之间，由8台300MW超临界燃气燃油机组组成，电站额定发电容量曾经占阿塞拜疆国家发电总容量的50%，机组建于1981和1990年之间，主要燃料是天然气，重油作为备用燃料，主要为首都和主要的工业城市供电，该项目的实施为阿塞拜疆经济增长和社会发展起到了极大保障作用。",
    repairsDescription:"2012年进行了电站的大型修理，大型修理内容主要包括锅炉、汽轮机、发电机、自动控制系统以及辅机系统的增容改造和检修。",
    efficiencyDescription:"电站的大型修理完成后机组的出力比原设计值提高10%，由原设计的300MW提高到330MW，效率大大优于原设计指标。机组增容改造后既节省了燃料，又满足阿塞拜疆日益增长的电力需求。",
  }
};

const i18n = createI18n({
  locale: 'ru-ru',
  messages
});

createApp(App).use(i18n).mount('#app');
