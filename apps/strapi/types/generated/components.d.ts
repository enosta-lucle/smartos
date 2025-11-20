import type { Schema, Struct } from '@strapi/strapi';

export interface SharedButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    href: Schema.Attribute.String;
    icon: Schema.Attribute.Text;
    label: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Click here'>;
    variant: Schema.Attribute.Enumeration<['solid', 'text', 'white']>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.button': SharedButton;
    }
  }
}
