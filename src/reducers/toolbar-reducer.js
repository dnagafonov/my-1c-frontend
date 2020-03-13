const {type} = require('../actions/action-constants');

const initialState = {
  activeId: null,
  toolbarItems:[
    {
      id: 0,
      toolName: "Рабочий стол",
      src: './images/dashboard.png',
      alt: "dashboard",
      isActive: false,
      sidebarItems:[
        {
          header: "Продажа",
          items: ["Выпика накладных", "Обработка внутренних заказов"]
        },
        {
          header: "Розничная торговля",
          items: ["Кассовые операции", "POS", "Печать ценников ТСД", "Обработка Z-отчетов", "Переоценка", "Подарочные сертификаты", "Выписка подарочных сертификатов"]
        }
      ]
    },
    {
      id: 1,
      toolName: "Справочники",
      src: './images/catalog.png',
      alt: "dashboard",
      isActive: false
    },
    {
      id: 2,
      toolName: "Закупки",
      src: './images/purchase.png',
      alt: "dashboard",
      isActive: false
    },
    {
      id: 3,
      toolName: "Склад",
      src: './images/stock.png',
      alt: "dashboard",
      isActive: false
    },
    {
      id: 4,
      toolName: "Продажи",
      src: './images/sale.png',
      alt: "dashboard",
      isActive: false
    },
    {
      id: 5,
      toolName: "Розничная торговля",
      src: './images/retail.png',
      alt: "dashboard",
      isActive: false
    },
    {
      id: 6,
      toolName: "Финансы",
      src: './images/finance.png',
      alt: "dashboard",
      isActive: false
    },
    {
      id: 7,
      toolName: "Цена",
      src: './images/priceList.png',
      alt: "dashboard",
      isActive: false
    },
    {
      id: 8,
      toolName: "Оборудование",
      src: './images/machinery.png',
      alt: "dashboard",
      isActive: false
    },
    {
      id: 9,
      toolName: "Транспорт",
      src: './images/transport.png',
      alt: "dashboard",
      isActive: false
    },
    {
      id: 10,
      toolName: "ВЭД",
      src: './images/customs.png',
      alt: "dashboard",
      isActive: false
    },
    {
      id: 11,
      toolName: "Производство",
      src: './images/manufacturing.png',
      alt: "dashboard",
      isActive: false
    },
    {
      id: 12,
      toolName: "WMS",
      src: './images/wms.png',
      alt: "dashboard",
      isActive: false
    },
    {
      id: 13,
      toolName: "Чат",
      src: './images/chat.png',
      alt: "dashboard",
      isActive: false
    },
    {
      id: 14,
      toolName: "Учетная запись",
      src: './images/lock.png',
      alt: "dashboard",
      isActive: false
    },
    {
      id: 15,
      toolName: "Поиск",
      src: './images/search.png',
      alt: "dashboard",
      isActive: false
    },
    {
      id: 16,
      toolName: "BI",
      src: './images/bi.png',
      alt: "dashboard",
      isActive: false
    }
  ],
}

const toolbar = (state = initialState, action) => {
  let active = null;
  switch (action.type) {

    case type.TOOGLE_TOOLBAR_ITEM:
      return {
        toolbarItems: state.toolbarItems.map(el => {
          if(el.id === action.id){
            active = el.id;
            el.isActive = true;
          }
          else {
            el.isActive = false;
          }
          return el;
        }),
        activeId: active,
        activeItemProps: state.toolbarItems[active].sidebarItems
      }

    default:
      return state;
  }
}

export default toolbar;