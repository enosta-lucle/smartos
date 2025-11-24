import type { Schema, Struct } from '@strapi/strapi';

export interface HeaderMenuItemLevel1 extends Struct.ComponentSchema {
  collectionName: 'components_header_menu_item_level_1s';
  info: {
    displayName: 'Menu Item Level 1';
  };
  attributes: {
    children: Schema.Attribute.Component<'header.menu-item-level-2', true>;
    hasChild: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    href: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HeaderMenuItemLevel2 extends Struct.ComponentSchema {
  collectionName: 'components_header_menu_item_level_2s';
  info: {
    displayName: 'Menu Item Level 2';
  };
  attributes: {
    badge: Schema.Attribute.String;
    children: Schema.Attribute.Component<'header.menu-item-level-3', true>;
    description: Schema.Attribute.Text;
    hasChild: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    href: Schema.Attribute.String;
    icon: Schema.Attribute.Text &
      Schema.Attribute.CustomField<'plugin::icons-field.icon'>;
    title: Schema.Attribute.String;
  };
}

export interface HeaderMenuItemLevel3 extends Struct.ComponentSchema {
  collectionName: 'components_header_menu_item_level_3s';
  info: {
    displayName: 'Menu Item Level 3';
  };
  attributes: {
    badge: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    href: Schema.Attribute.String;
    icon: Schema.Attribute.Text &
      Schema.Attribute.CustomField<'plugin::icons-field.icon'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionHero extends Struct.ComponentSchema {
  collectionName: 'components_section_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'shared.button', true>;
    description: Schema.Attribute.Text;
    highlight: Schema.Attribute.String;
    tag: Schema.Attribute.String;
    title: Schema.Attribute.Text;
    visual: Schema.Attribute.Media<'images' | 'videos'>;
  };
}

export interface SharedAddress extends Struct.ComponentSchema {
  collectionName: 'components_shared_addresses';
  info: {
    displayName: 'Address';
  };
  attributes: {
    city: Schema.Attribute.String;
    detail: Schema.Attribute.String;
  };
}

export interface SharedAward extends Struct.ComponentSchema {
  collectionName: 'components_shared_awards';
  info: {
    displayName: 'Award';
  };
  attributes: {
    name: Schema.Attribute.String;
    year: Schema.Attribute.Integer;
  };
}

export interface SharedBrand extends Struct.ComponentSchema {
  collectionName: 'components_shared_brands';
  info: {
    displayName: 'Brand';
  };
  attributes: {
    href: Schema.Attribute.String;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
  };
}

export interface SharedButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    href: Schema.Attribute.String;
    icon: Schema.Attribute.Text &
      Schema.Attribute.CustomField<'plugin::icons-field.icon'>;
    label: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Click here'>;
    variant: Schema.Attribute.Enumeration<['solid', 'text', 'white']> &
      Schema.Attribute.DefaultTo<'solid'>;
  };
}

export interface SharedContactInformation extends Struct.ComponentSchema {
  collectionName: 'components_shared_contact_informations';
  info: {
    displayName: 'Contact Information';
  };
  attributes: {
    addresses: Schema.Attribute.Component<'shared.address', true>;
    email: Schema.Attribute.String;
    facebook: Schema.Attribute.String;
    linkedin: Schema.Attribute.String;
    phone: Schema.Attribute.String;
    youtube: Schema.Attribute.String;
  };
}

export interface SharedCounter extends Struct.ComponentSchema {
  collectionName: 'components_shared_counters';
  info: {
    displayName: 'Counter';
  };
  attributes: {
    count: Schema.Attribute.Integer & Schema.Attribute.Required;
    label: Schema.Attribute.String;
    unit: Schema.Attribute.String;
  };
}

export interface SharedDepartment extends Struct.ComponentSchema {
  collectionName: 'components_shared_departments';
  info: {
    displayName: 'Department';
  };
  attributes: {
    functions: Schema.Attribute.Text;
    thumbnail: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedOpenGraph extends Struct.ComponentSchema {
  collectionName: 'components_shared_open_graphs';
  info: {
    displayName: 'Open Graph';
    icon: 'project-diagram';
  };
  attributes: {
    ogDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    ogImage: Schema.Attribute.Media<'images'>;
    ogTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 70;
      }>;
    ogType: Schema.Attribute.String;
    ogUrl: Schema.Attribute.String;
  };
}

export interface SharedProcess extends Struct.ComponentSchema {
  collectionName: 'components_shared_processes';
  info: {
    displayName: 'Process';
  };
  attributes: {
    text: Schema.Attribute.String;
    thumbnail: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharedQuestion extends Struct.ComponentSchema {
  collectionName: 'components_shared_questions';
  info: {
    displayName: 'Question';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.Text;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'SEO';
    icon: 'search';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
        minLength: 50;
      }>;
    metaImage: Schema.Attribute.Media<'images'>;
    metaRobots: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaViewport: Schema.Attribute.String;
    openGraph: Schema.Attribute.Component<'shared.open-graph', false>;
    structuredData: Schema.Attribute.JSON;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'header.menu-item-level-1': HeaderMenuItemLevel1;
      'header.menu-item-level-2': HeaderMenuItemLevel2;
      'header.menu-item-level-3': HeaderMenuItemLevel3;
      'section.hero': SectionHero;
      'shared.address': SharedAddress;
      'shared.award': SharedAward;
      'shared.brand': SharedBrand;
      'shared.button': SharedButton;
      'shared.contact-information': SharedContactInformation;
      'shared.counter': SharedCounter;
      'shared.department': SharedDepartment;
      'shared.open-graph': SharedOpenGraph;
      'shared.process': SharedProcess;
      'shared.question': SharedQuestion;
      'shared.seo': SharedSeo;
    }
  }
}
