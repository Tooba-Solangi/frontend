// import { Menu } from "../interface/menu.interface";

// export const menu: Menu[] = [
//   {
//     id: 1,
//     title: 'home',
//     type: 'sub',
//     megaMenu: true,
//     megaMenuType: 'image',
//     active: false,
//     children: [
//       {
//         title: 'paris',
//         path: 'theme/paris',
//         type: 'link',
//         image: 'assets/images/themes/01.png',
//       },
//       {
//         title: 'tokyo',
//         path: 'theme/tokyo',
//         type: 'link',
//         image: 'assets/images/themes/02.png',
//       },
//       {
//         title: 'osaka',
//         path: 'theme/osaka',
//         type: 'link',
//         image: 'assets/images/themes/03.png',
//       },
//       {
//         title: 'rome',
//         path: 'theme/rome',
//         type: 'link',
//         image: 'assets/images/themes/04.png',
//       },
//       {
//         title: 'madrid',
//         path: 'theme/madrid',
//         type: 'link',
//         image: 'assets/images/themes/05.png',
//       },
//       {
//         title: 'berlin',
//         path: 'theme/berlin',
//         type: 'link',
//         image: 'assets/images/themes/06.png',
//       },
//       {
//         title: 'denver',
//         path: 'theme/denver',
//         type: 'link',
//         image: 'assets/images/themes/07.png',
//       },
//       {
//         title: 'Coming Soon',
//         path: '',
//         type: 'link',
//         image: 'assets/images/themes/08.png',
//       },
//     ],
//   },
//   {
//     id: 2,
//     title: 'Best Sellers',
//     type: 'sub',
//     megaMenu: true,
//     megaMenuType: 'link',
//     path: 'collections',
//     active: false,
//     slider: 'product',
//     children: [
//       {
//         children: [
//           {
//             title: 'collection_layouts',
//             type: 'sub',
//           },
//           {
//             title: 'collection_left_sidebar',
//             path: 'collections',
//             params: { layout: 'collection_left_sidebar' },
//             type: 'link',
//             label: 'hot',
//             labelClass: 'warning-label',
//           },
//           {
//             title: 'collection_right_sidebar',
//             path: 'collections',
//             params: { layout: 'collection_right_sidebar' },
//             type: 'link',
//           },
//           {
//             title: 'collection_no_sidebar',
//             path: 'collections',
//             params: { layout: 'collection_no_sidebar' },
//             type: 'link',
//           },
//           {
//             title: 'collection_3_grid',
//             path: 'collections',
//             params: { layout: 'collection_3_grid' },
//             type: 'link',
//           },
//           {
//             title: 'collection_4_grid',
//             path: 'collections',
//             params: { layout: 'collection_4_grid' },
//             type: 'link',
//             label: 'new',
//           },
//           {
//             title: 'collection_5_grid',
//             path: 'collections',
//             type: 'link',
//             params: { layout: 'collection_5_grid' },
//           },
//           {
//             title: 'Collection List View',
//             path: 'collections',
//             params: { layout: 'collection_list_view' },
//             type: 'link',
//           },
//         ],
//       },
//       {
//         children: [
//           {
//             title: 'collection_layouts',
//             type: 'sub',
//           },
//           {
//             title: 'category_slider',
//             path: 'collections',
//             params: { layout: 'collection_category_slider' },
//             type: 'link',
//           },
//           {
//             title: 'category_sidebar',
//             path: 'collections',
//             params: { layout: 'collection_category_sidebar' },
//             type: 'link',
//             label: 'new',
//           },
//           {
//             title: 'category_banner',
//             path: 'collections',
//             params: { layout: 'collection_banner' },
//             type: 'link',
//           },
//           {
//             title: 'offcanvas_Filter',
//             path: 'collections',
//             params: { layout: 'collection_offcanvas_filter' },
//             type: 'link',
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: 3,
//     title: 'product',
//     type: 'sub',
//     megaMenu: true,
//     megaMenuType: 'link',
//     slider: 'banner_portrait',
//     active: false,
//     children: [
//       {
//         children: [
//           {
//             title: 'product_pages',
//             type: 'sub',
//           },
//           {
//             title: 'product_thumbnail',
//             path: 'product/deliciously-sweet-watermelon',
//             params: { layout: 'product_thumbnail' },
//             type: 'link',
//           },
//           {
//             title: 'product_images',
//             path: 'product/deliciously-sweet-watermelon',
//             params: { layout: 'product_images' },
//             type: 'link',
//           },
//           {
//             title: 'product_slider',
//             path: 'product/deliciously-sweet-watermelon',
//             params: { layout: 'product_slider' },
//             type: 'link',
//           },
//           {
//             title: 'product_sticky',
//             type: 'link',
//             path: 'product/deliciously-sweet-watermelon',
//             params: { layout: 'product_sticky' },
//             labelClass: 'warning-label',
//           },
//           {
//             title: 'product_accordion',
//             path: 'product/deliciously-sweet-watermelon',
//             params: { layout: 'product_accordion' },
//             type: 'link',
//           },
//           {
//             title: 'product_tab',
//             path: 'product/deliciously-sweet-watermelon',
//             type: 'link',
//           },
//           {
//             title: 'product_features',
//             type: 'sub',
//             class: 'custom-mt',
//           },
//           {
//             title: 'bundle_cross_sale',
//             path: 'product/high-quality-bookshelves',
//             type: 'link',
//           },
//           {
//             title: 'hot_stock_progress',
//             path: 'product/mini-bodycon-dress',
//             type: 'link',
//             label: 'new',
//           },
//           {
//             title: 'sold_out',
//             path: 'product/solid-collared-tshirts',
//             type: 'link',
//           },
//           {
//             title: 'sale_countdown',
//             path: 'product/men-gym-co-ord-set',
//             type: 'link',
//           },
//           {
//             title: 'product_zoom',
//             path: 'product/deliciously-sweet-watermelon',
//             type: 'link',
//           },
//         ],
//       },
//       {
//         children: [
//           {
//             title: 'product_variants_style',
//             type: 'sub',
//           },
//           {
//             title: 'variant_rectangle',
//             path: 'product/organic-oranges',
//             type: 'link',
//           },
//           {
//             title: 'variant_circle',
//             type: 'link',
//             path: 'product/solid-hooded-sweatshirt',
//             label: 'new',
//           },
//           {
//             title: 'variant_image_swatch',
//             path: 'product/relaxed-fit-hoodie',
//             type: 'link',
//           },
//           {
//             title: 'variant_color',
//             path: 'product/premium-blazer',
//             type: 'link',
//           },
//           {
//             title: 'variant_radio_button',
//             path: 'product/women-flared-jeans',
//             type: 'link',
//           },
//           {
//             title: 'variant_dropdown',
//             path: 'product/fresh-and-pure-oil',
//             type: 'link',
//           },
//           {
//             title: 'product_features',
//             type: 'sub',
//             class: 'custom-mt',
//           },
//           {
//             title: 'sticky_checkout',
//             path: 'product/elegant-and-durable-bed',
//             type: 'link',
//           },
//           {
//             title: 'dynamic_checkout',
//             type: 'link',
//             path: 'product/solid-polo-tshirt',
//             labelClass: 'warning-label',
//           },
//           {
//             title: 'secure_checkout',
//             path: 'product/premium-dumbbells',
//             type: 'link',
//           },
//           {
//             title: 'active_product_view',
//             path: 'product/organic-long-grain-rice',
//             type: 'link',
//           },
//           {
//             title: 'active_last_orders',
//             path: 'product/delicious-cupcakes',
//             type: 'link',
//           },
//         ],
//       },
//       {
//         children: [
//           {
//             title: 'product_features',
//             type: 'sub',
//           },
//           {
//             title: 'product_simple',
//             path: 'product/deliciously-sweet-strawberry',
//             type: 'link',
//           },
//           {
//             title: 'product_classified',
//             path: 'product/deliciously-sweet-watermelon',
//             type: 'link',
//             label: 'new',
//           },
//           {
//             title: 'size_chart',
//             type: 'link',
//             path: 'product/solid-hooded-sweatshirt',
//             label: 'new',
//           },
//           {
//             title: 'delivery_return',
//             path: 'product/relaxed-fit-hoodie',
//             type: 'link',
//           },
//           {
//             title: 'Product Review',
//             path: 'product/deliciously-sweet-watermelon',
//             type: 'link',
//           },
//           {
//             title: 'ask_an_expert',
//             path: 'product/premium-blazer',
//             type: 'link',
//           },
//           {
//             title: 'product_features',
//             type: 'sub',
//             class: 'custom-mt',
//           },
//           {
//             title: 'product_tags',
//             path: 'product/solid-hooded-sweatshirt',
//             type: 'link',
//           },
//           {
//             title: 'product_information',
//             path: 'product/solid-cotton-tshirts',
//             type: 'link',
//           },
//           {
//             title: 'social_share',
//             type: 'link',
//             path: 'product/pointed-toe-kitten-heeled-sandals',
//             label: 'hot',
//             labelClass: 'warning-label',
//           },
//           {
//             title: 'related_products',
//             type: 'link',
//             path: 'product/delicious-biscuits',
//             label: 'hot',
//             labelClass: 'warning-label',
//           },
//           {
//             title: 'wishlist_compare',
//             path: 'product/crispy-potato-chips',
//             type: 'link',
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: 21,
//     title: 'Orders',
//     type: 'sub',
//     megaMenu: true,
//     megaMenuType: 'link',
//     path: 'collections',
//     active: false,
//     slider: 'product',
//     children: [
//       {
//         title: 'paris',
//         path: 'theme/paris',
//         type: 'link',
//         image: 'assets/images/themes/01.png',
//       },
//     ],
//   },
//   {
//     id: 21,
//     title: 'Account',
//     type: 'sub',
//     megaMenu: true,
//     megaMenuType: 'link',
//     path: 'collections',
//     active: false,
//     slider: 'product',
//     children: [
//       {
//         title: 'paris',
//         path: 'theme/paris',
//         type: 'link',
//         image: 'assets/images/themes/01.png',
//       },
//     ],
//   },
//   {
//     id: 4,
//     title: 'blog',
//     type: 'sub',
//     megaMenu: true,
//     megaMenuType: 'link',
//     slider: 'blog',
//     active: false,
//     children: [
//       {
//         children: [
//           {
//             title: 'blog_pages',
//             type: 'sub',
//           },
//           {
//             title: 'blog_list',
//             type: 'link',
//             path: 'blogs',
//             params: { style: 'list_view', sidebar: 'left_sidebar' },
//             label: 'new',
//           },
//           {
//             title: 'grid_left_sidebar',
//             type: 'link',
//             label: 'hot',
//             path: 'blogs',
//             params: { style: 'grid_view', sidebar: 'left_sidebar' },
//             labelClass: 'warning-label',
//           },
//           {
//             title: 'grid_right_sidebar',
//             type: 'link',
//             path: 'blogs',
//             params: { style: 'grid_view', sidebar: 'right_sidebar' },
//           },
//           {
//             title: 'grid_no_sidebar',
//             type: 'link',
//             path: 'blogs',
//             params: { style: 'grid_view', sidebar: 'no_sidebar' },
//           },
//           {
//             title: 'blog_details',
//             path: 'blog/supercharge-your-meals-incorporating-colorful-vegetables-and-fruits',
//             type: 'link',
//           },
//         ],
//       },
//     ],
//   },
// ];



import { Menu } from "../interface/menu.interface";

export const menu: Menu[] = [
  {
    id: 1,
    title: 'Bathroom Safety',
    type: 'sub',
    megaMenu: true,
    megaMenuType: 'image',
    active: false,
    // children: [
    //   {
    //     title: 'paris',
    //     path: 'theme/paris',
    //     type: 'link',
    //     image: 'assets/images/themes/01.png',
    //   },
    //   {
    //     title: 'tokyo',
    //     path: 'theme/tokyo',
    //     type: 'link',
    //     image: 'assets/images/themes/02.png',
    //   },
    //   {
    //     title: 'osaka',
    //     path: 'theme/osaka',
    //     type: 'link',
    //     image: 'assets/images/themes/03.png',
    //   },
    //   {
    //     title: 'rome',
    //     path: 'theme/rome',
    //     type: 'link',
    //     image: 'assets/images/themes/04.png',
    //   },
    //   {
    //     title: 'madrid',
    //     path: 'theme/madrid',
    //     type: 'link',
    //     image: 'assets/images/themes/05.png',
    //   },
    //   {
    //     title: 'berlin',
    //     path: 'theme/berlin',
    //     type: 'link',
    //     image: 'assets/images/themes/06.png',
    //   },
    //   {
    //     title: 'denver',
    //     path: 'theme/denver',
    //     type: 'link',
    //     image: 'assets/images/themes/07.png',
    //   },
    //   {
    //     title: 'Coming Soon',
    //     path: '',
    //     type: 'link',
    //     image: 'assets/images/themes/08.png',
    //   },
    // ],
  },
  {
    id: 2,
    title: 'Rollators',
    type: 'sub',
    megaMenu: true,
    megaMenuType: 'link',
    path: 'collections',
    active: false,
    slider: 'product',
    // children: [
    //   {
    //     children: [
    //       {
    //         title: 'collection_layouts',
    //         type: 'sub',
    //       },
    //       {
    //         title: 'collection_left_sidebar',
    //         path: 'collections',
    //         params: { layout: 'collection_left_sidebar' },
    //         type: 'link',
    //         label: 'hot',
    //         labelClass: 'warning-label',
    //       },
    //       {
    //         title: 'collection_right_sidebar',
    //         path: 'collections',
    //         params: { layout: 'collection_right_sidebar' },
    //         type: 'link',
    //       },
    //       {
    //         title: 'collection_no_sidebar',
    //         path: 'collections',
    //         params: { layout: 'collection_no_sidebar' },
    //         type: 'link',
    //       },
    //       {
    //         title: 'collection_3_grid',
    //         path: 'collections',
    //         params: { layout: 'collection_3_grid' },
    //         type: 'link',
    //       },
    //       {
    //         title: 'collection_4_grid',
    //         path: 'collections',
    //         params: { layout: 'collection_4_grid' },
    //         type: 'link',
    //         label: 'new',
    //       },
    //       {
    //         title: 'collection_5_grid',
    //         path: 'collections',
    //         type: 'link',
    //         params: { layout: 'collection_5_grid' },
    //       },
    //       {
    //         title: 'Collection List View',
    //         path: 'collections',
    //         params: { layout: 'collection_list_view' },
    //         type: 'link',
    //       },
    //     ],
    //   },
    //   {
    //     children: [
    //       {
    //         title: 'collection_layouts',
    //         type: 'sub',
    //       },
    //       {
    //         title: 'category_slider',
    //         path: 'collections',
    //         params: { layout: 'collection_category_slider' },
    //         type: 'link',
    //       },
    //       {
    //         title: 'category_sidebar',
    //         path: 'collections',
    //         params: { layout: 'collection_category_sidebar' },
    //         type: 'link',
    //         label: 'new',
    //       },
    //       {
    //         title: 'category_banner',
    //         path: 'collections',
    //         params: { layout: 'collection_banner' },
    //         type: 'link',
    //       },
    //       {
    //         title: 'offcanvas_Filter',
    //         path: 'collections',
    //         params: { layout: 'collection_offcanvas_filter' },
    //         type: 'link',
    //       },
    //     ],
    //   },
    // ],
  },
  {
    id: 3,
    title: 'Patient Room',
    type: 'sub',
    megaMenu: true,
    megaMenuType: 'link',
    slider: 'banner_portrait',
    active: false,
    // children: [
    //   {
    //     children: [
    //       {
    //         title: 'product_pages',
    //         type: 'sub',
    //       },
    //       {
    //         title: 'product_thumbnail',
    //         path: 'product/deliciously-sweet-watermelon',
    //         params: { layout: 'product_thumbnail' },
    //         type: 'link',
    //       },
    //       {
    //         title: 'product_images',
    //         path: 'product/deliciously-sweet-watermelon',
    //         params: { layout: 'product_images' },
    //         type: 'link',
    //       },
    //       {
    //         title: 'product_slider',
    //         path: 'product/deliciously-sweet-watermelon',
    //         params: { layout: 'product_slider' },
    //         type: 'link',
    //       },
    //       {
    //         title: 'product_sticky',
    //         type: 'link',
    //         path: 'product/deliciously-sweet-watermelon',
    //         params: { layout: 'product_sticky' },
    //         labelClass: 'warning-label',
    //       },
    //       {
    //         title: 'product_accordion',
    //         path: 'product/deliciously-sweet-watermelon',
    //         params: { layout: 'product_accordion' },
    //         type: 'link',
    //       },
    //       {
    //         title: 'product_tab',
    //         path: 'product/deliciously-sweet-watermelon',
    //         type: 'link',
    //       },
    //       {
    //         title: 'product_features',
    //         type: 'sub',
    //         class: 'custom-mt',
    //       },
    //       {
    //         title: 'bundle_cross_sale',
    //         path: 'product/high-quality-bookshelves',
    //         type: 'link',
    //       },
    //       {
    //         title: 'hot_stock_progress',
    //         path: 'product/mini-bodycon-dress',
    //         type: 'link',
    //         label: 'new',
    //       },
    //       {
    //         title: 'sold_out',
    //         path: 'product/solid-collared-tshirts',
    //         type: 'link',
    //       },
    //       {
    //         title: 'sale_countdown',
    //         path: 'product/men-gym-co-ord-set',
    //         type: 'link',
    //       },
    //       {
    //         title: 'product_zoom',
    //         path: 'product/deliciously-sweet-watermelon',
    //         type: 'link',
    //       },
    //     ],
    //   },
    //   {
    //     children: [
    //       {
    //         title: 'product_variants_style',
    //         type: 'sub',
    //       },
    //       {
    //         title: 'variant_rectangle',
    //         path: 'product/organic-oranges',
    //         type: 'link',
    //       },
    //       {
    //         title: 'variant_circle',
    //         type: 'link',
    //         path: 'product/solid-hooded-sweatshirt',
    //         label: 'new',
    //       },
    //       {
    //         title: 'variant_image_swatch',
    //         path: 'product/relaxed-fit-hoodie',
    //         type: 'link',
    //       },
    //       {
    //         title: 'variant_color',
    //         path: 'product/premium-blazer',
    //         type: 'link',
    //       },
    //       {
    //         title: 'variant_radio_button',
    //         path: 'product/women-flared-jeans',
    //         type: 'link',
    //       },
    //       {
    //         title: 'variant_dropdown',
    //         path: 'product/fresh-and-pure-oil',
    //         type: 'link',
    //       },
    //       {
    //         title: 'product_features',
    //         type: 'sub',
    //         class: 'custom-mt',
    //       },
    //       {
    //         title: 'sticky_checkout',
    //         path: 'product/elegant-and-durable-bed',
    //         type: 'link',
    //       },
    //       {
    //         title: 'dynamic_checkout',
    //         type: 'link',
    //         path: 'product/solid-polo-tshirt',
    //         labelClass: 'warning-label',
    //       },
    //       {
    //         title: 'secure_checkout',
    //         path: 'product/premium-dumbbells',
    //         type: 'link',
    //       },
    //       {
    //         title: 'active_product_view',
    //         path: 'product/organic-long-grain-rice',
    //         type: 'link',
    //       },
    //       {
    //         title: 'active_last_orders',
    //         path: 'product/delicious-cupcakes',
    //         type: 'link',
    //       },
    //     ],
    //   },
    //   {
    //     children: [
    //       {
    //         title: 'product_features',
    //         type: 'sub',
    //       },
    //       {
    //         title: 'product_simple',
    //         path: 'product/deliciously-sweet-strawberry',
    //         type: 'link',
    //       },
    //       {
    //         title: 'product_classified',
    //         path: 'product/deliciously-sweet-watermelon',
    //         type: 'link',
    //         label: 'new',
    //       },
    //       {
    //         title: 'size_chart',
    //         type: 'link',
    //         path: 'product/solid-hooded-sweatshirt',
    //         label: 'new',
    //       },
    //       {
    //         title: 'delivery_return',
    //         path: 'product/relaxed-fit-hoodie',
    //         type: 'link',
    //       },
    //       {
    //         title: 'Product Review',
    //         path: 'product/deliciously-sweet-watermelon',
    //         type: 'link',
    //       },
    //       {
    //         title: 'ask_an_expert',
    //         path: 'product/premium-blazer',
    //         type: 'link',
    //       },
    //       {
    //         title: 'product_features',
    //         type: 'sub',
    //         class: 'custom-mt',
    //       },
    //       {
    //         title: 'product_tags',
    //         path: 'product/solid-hooded-sweatshirt',
    //         type: 'link',
    //       },
    //       {
    //         title: 'product_information',
    //         path: 'product/solid-cotton-tshirts',
    //         type: 'link',
    //       },
    //       {
    //         title: 'social_share',
    //         type: 'link',
    //         path: 'product/pointed-toe-kitten-heeled-sandals',
    //         label: 'hot',
    //         labelClass: 'warning-label',
    //       },
    //       {
    //         title: 'related_products',
    //         type: 'link',
    //         path: 'product/delicious-biscuits',
    //         label: 'hot',
    //         labelClass: 'warning-label',
    //       },
    //       {
    //         title: 'wishlist_compare',
    //         path: 'product/crispy-potato-chips',
    //         type: 'link',
    //       },
    //     ],
    //   },
    // ],
  },
  {
    id: 21,
    title: 'Walkers',
    type: 'sub',
    megaMenu: true,
    megaMenuType: 'link',
    path: 'collections',
    active: false,
    slider: 'product',
    // children: [
    //   {
    //     title: 'paris',
    //     path: 'theme/paris',
    //     type: 'link',
    //     image: 'assets/images/themes/01.png',
    //   },
    // ],
  },
  {
    id: 21,
    title: 'Caregiving Aids',
    type: 'sub',
    megaMenu: true,
    megaMenuType: 'link',
    path: 'collections',
    active: false,
    slider: 'product',
    // children: [
    //   {
    //     title: 'paris',
    //     path: 'theme/paris',
    //     type: 'link',
    //     image: 'assets/images/themes/01.png',
    //   },
    // ],
  },
  {
    id: 4,
    title: 'Personal Care',
    type: 'sub',
    megaMenu: true,
    megaMenuType: 'link',
    slider: 'blog',
    active: false,
    // children: [
    //   {
    //     children: [
    //       {
    //         title: 'blog_pages',
    //         type: 'sub',
    //       },
    //       {
    //         title: 'blog_list',
    //         type: 'link',
    //         path: 'blogs',
    //         params: { style: 'list_view', sidebar: 'left_sidebar' },
    //         label: 'new',
    //       },
    //       {
    //         title: 'grid_left_sidebar',
    //         type: 'link',
    //         label: 'hot',
    //         path: 'blogs',
    //         params: { style: 'grid_view', sidebar: 'left_sidebar' },
    //         labelClass: 'warning-label',
    //       },
    //       {
    //         title: 'grid_right_sidebar',
    //         type: 'link',
    //         path: 'blogs',
    //         params: { style: 'grid_view', sidebar: 'right_sidebar' },
    //       },
    //       {
    //         title: 'grid_no_sidebar',
    //         type: 'link',
    //         path: 'blogs',
    //         params: { style: 'grid_view', sidebar: 'no_sidebar' },
    //       },
    //       {
    //         title: 'blog_details',
    //         path: 'blog/supercharge-your-meals-incorporating-colorful-vegetables-and-fruits',
    //         type: 'link',
    //       },
    //     ],
    //   },
    // ],
  },
  {
    id: 4,
    title: 'Fail Prevention Monitors',
    type: 'sub',
    megaMenu: true,
    megaMenuType: 'link',
    slider: 'blog',
    // active: false,
    // children: [
    //   {
    //     children: [
    //       {
    //         title: 'blog_pages',
    //         type: 'sub',
    //       },
    //       {
    //         title: 'blog_list',
    //         type: 'link',
    //         path: 'blogs',
    //         params: { style: 'list_view', sidebar: 'left_sidebar' },
    //         label: 'new',
    //       },
    //       {
    //         title: 'grid_left_sidebar',
    //         type: 'link',
    //         label: 'hot',
    //         path: 'blogs',
    //         params: { style: 'grid_view', sidebar: 'left_sidebar' },
    //         labelClass: 'warning-label',
    //       },
    //       {
    //         title: 'grid_right_sidebar',
    //         type: 'link',
    //         path: 'blogs',
    //         params: { style: 'grid_view', sidebar: 'right_sidebar' },
    //       },
    //       {
    //         title: 'grid_no_sidebar',
    //         type: 'link',
    //         path: 'blogs',
    //         params: { style: 'grid_view', sidebar: 'no_sidebar' },
    //       },
    //       {
    //         title: 'blog_details',
    //         path: 'blog/supercharge-your-meals-incorporating-colorful-vegetables-and-fruits',
    //         type: 'link',
    //       },
    //     ],
    //   },
    // ],
  },
  {
    id: 4,
    title: 'Lift Chair',
    type: 'sub',
    megaMenu: true,
    megaMenuType: 'link',
    slider: 'blog',
    active: false,
    // children: [
    //   {
    //     children: [
    //       {
    //         title: 'blog_pages',
    //         type: 'sub',
    //       },
    //       {
    //         title: 'blog_list',
    //         type: 'link',
    //         path: 'blogs',
    //         params: { style: 'list_view', sidebar: 'left_sidebar' },
    //         label: 'new',
    //       },
    //       {
    //         title: 'grid_left_sidebar',
    //         type: 'link',
    //         label: 'hot',
    //         path: 'blogs',
    //         params: { style: 'grid_view', sidebar: 'left_sidebar' },
    //         labelClass: 'warning-label',
    //       },
    //       {
    //         title: 'grid_right_sidebar',
    //         type: 'link',
    //         path: 'blogs',
    //         params: { style: 'grid_view', sidebar: 'right_sidebar' },
    //       },
    //       {
    //         title: 'grid_no_sidebar',
    //         type: 'link',
    //         path: 'blogs',
    //         params: { style: 'grid_view', sidebar: 'no_sidebar' },
    //       },
    //       {
    //         title: 'blog_details',
    //         path: 'blog/supercharge-your-meals-incorporating-colorful-vegetables-and-fruits',
    //         type: 'link',
    //       },
    //     ],
    //   },
    // ],
  },
  // {
  //   id: 4,
  //   title: 'Facility Supplies',
  //   type: 'sub',
  //   megaMenu: true,
  //   megaMenuType: 'link',
  //   slider: 'blog',
  //   active: false,
  //   // children: [
  //   //   {
  //   //     children: [
  //   //       {
  //   //         title: 'blog_pages',
  //   //         type: 'sub',
  //   //       },
  //   //       {
  //   //         title: 'blog_list',
  //   //         type: 'link',
  //   //         path: 'blogs',
  //   //         params: { style: 'list_view', sidebar: 'left_sidebar' },
  //   //         label: 'new',
  //   //       },
  //   //       {
  //   //         title: 'grid_left_sidebar',
  //   //         type: 'link',
  //   //         label: 'hot',
  //   //         path: 'blogs',
  //   //         params: { style: 'grid_view', sidebar: 'left_sidebar' },
  //   //         labelClass: 'warning-label',
  //   //       },
  //   //       {
  //   //         title: 'grid_right_sidebar',
  //   //         type: 'link',
  //   //         path: 'blogs',
  //   //         params: { style: 'grid_view', sidebar: 'right_sidebar' },
  //   //       },
  //   //       {
  //   //         title: 'grid_no_sidebar',
  //   //         type: 'link',
  //   //         path: 'blogs',
  //   //         params: { style: 'grid_view', sidebar: 'no_sidebar' },
  //   //       },
  //   //       {
  //   //         title: 'blog_details',
  //   //         path: 'blog/supercharge-your-meals-incorporating-colorful-vegetables-and-fruits',
  //   //         type: 'link',
  //   //       },
  //   //     ],
  //   //   },
  //   // ],
  // },
  
];

