import { defineField, defineType } from 'sanity';

export const propertyDetailSectionType = defineType({
  name: 'propertyDetail',
  title: 'Property Detail',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'heading',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'properties',
      title: 'Properties',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'property' }],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'customPropertyData',
      title: 'Custom Property Data Override',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Custom Title',
          type: 'string',
        }),
        defineField({
          name: 'address',
          title: 'Custom Address',
          type: 'string',
        }),
        defineField({
          name: 'price',
          title: 'Custom Price',
          type: 'string',
        }),
        defineField({
          name: 'pricePerSqft',
          title: 'Custom Price Per Sqft',
          type: 'string',
        }),
        defineField({
          name: 'description',
          title: 'Custom Description',
          type: 'blockContent',
        }),
      ],
      description:
        'Optional: Override property data from the referenced property',
    }),
    defineField({
      name: 'layout',
      title: 'Display Layout',
      type: 'string',
      options: {
        list: [
          { title: 'Grid Layout', value: 'grid' },
          { title: 'List Layout', value: 'list' },
          { title: 'Carousel Layout', value: 'carousel' },
          { title: 'Tabs Layout', value: 'tabs' },
        ],
      },
      initialValue: 'grid',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'maxProperties',
      title: 'Maximum Properties to Display',
      type: 'number',
      initialValue: 6,
      validation: (Rule) => Rule.min(1).max(20).integer(),
      description: 'Maximum number of properties to show at once',
    }),
    defineField({
      name: 'sortBy',
      title: 'Sort Properties By',
      type: 'string',
      options: {
        list: [
          { title: 'Manual Order', value: 'manual' },
          { title: 'Price (Low to High)', value: 'price-asc' },
          { title: 'Price (High to Low)', value: 'price-desc' },
          { title: 'Date Added', value: 'date-added' },
          { title: 'Area (Low to High)', value: 'area-asc' },
          { title: 'Area (High to Low)', value: 'area-desc' },
        ],
      },
      initialValue: 'manual',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'enablePagination',
      title: 'Enable Pagination',
      type: 'boolean',
      initialValue: false,
      description: 'Show pagination controls when there are many properties',
    }),
    defineField({
      name: 'propertiesPerPage',
      title: 'Properties Per Page',
      type: 'number',
      initialValue: 6,
      validation: (Rule) => Rule.min(1).max(20).integer(),
      description:
        'Number of properties to show per page (when pagination is enabled)',
    }),
    defineField({
      name: 'enableFilters',
      title: 'Enable Property Filters',
      type: 'boolean',
      initialValue: true,
      description: 'Show filter controls for users to filter properties',
    }),
    defineField({
      name: 'availableFilters',
      title: 'Available Filter Options',
      type: 'array',
      of: [
        {
          type: 'string',
          options: {
            list: [
              'Price Range',
              'Bedrooms',
              'Bathrooms',
              'Area',
              'Property Type',
              'Location',
              'Features',
              'Year Built',
            ],
          },
        },
      ],
      validation: (Rule) => Rule.unique().max(8),
      description: 'Select which filter options to show to users',
    }),
    defineField({
      name: 'showPropertyDetails',
      title: 'Show Property Details',
      type: 'object',
      fields: [
        defineField({
          name: 'showPrice',
          title: 'Show Price',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'showAddress',
          title: 'Show Address',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'showBeds',
          title: 'Show Bedrooms',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'showBaths',
          title: 'Show Bathrooms',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'showArea',
          title: 'Show Area',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'showGarage',
          title: 'Show Garage',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'showYearBuilt',
          title: 'Show Year Built',
          type: 'boolean',
          initialValue: true,
        }),
      ],
      description: 'Control which property details are displayed in the cards',
    }),
    defineField({
      name: 'callToAction',
      title: 'Call to Action',
      type: 'object',
      fields: [
        defineField({
          name: 'primaryButtonText',
          title: 'Primary Button Text',
          type: 'string',
          initialValue: 'View Details',
        }),
        defineField({
          name: 'secondaryButtonText',
          title: 'Secondary Button Text',
          type: 'string',
          initialValue: 'Contact Agent',
        }),
        defineField({
          name: 'showSecondaryButton',
          title: 'Show Secondary Button',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'buttonStyle',
          title: 'Button Style',
          type: 'string',
          options: {
            list: [
              { title: 'Filled', value: 'filled' },
              { title: 'Outlined', value: 'outlined' },
              { title: 'Text Only', value: 'text' },
            ],
          },
          initialValue: 'filled',
        }),
      ],
      description: 'Configure the call-to-action buttons for each property',
    }),
    defineField({
      name: 'emptyState',
      title: 'Empty State',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Empty State Title',
          type: 'string',
          initialValue: 'No Properties Found',
        }),
        defineField({
          name: 'message',
          title: 'Empty State Message',
          type: 'text',
          initialValue:
            "We couldn't find any properties matching your criteria. Try adjusting your filters or contact us for assistance.",
        }),
        defineField({
          name: 'showImage',
          title: 'Show Empty State Image',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'emptyStateImage',
          title: 'Empty State Image',
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
            }),
          ],
        }),
        defineField({
          name: 'actionButtonText',
          title: 'Action Button Text',
          type: 'string',
          initialValue: 'Reset Filters',
        }),
      ],
      description: 'Configure what is shown when no properties are found',
    }),
    defineField({
      name: 'loadingState',
      title: 'Loading State',
      type: 'object',
      fields: [
        defineField({
          name: 'showSkeleton',
          title: 'Show Skeleton Loading',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'skeletonCount',
          title: 'Number of Skeleton Items',
          type: 'number',
          initialValue: 6,
          validation: (Rule) => Rule.min(1).max(20).integer(),
        }),
        defineField({
          name: 'loadingMessage',
          title: 'Loading Message',
          type: 'string',
          initialValue: 'Loading properties...',
        }),
        defineField({
          name: 'showSpinner',
          title: 'Show Loading Spinner',
          type: 'boolean',
          initialValue: true,
        }),
      ],
      description: 'Configure how the loading state is displayed',
    }),
    defineField({
      name: 'responsiveSettings',
      title: 'Responsive Settings',
      type: 'object',
      fields: [
        defineField({
          name: 'mobileColumns',
          title: 'Mobile Columns',
          type: 'number',
          initialValue: 1,
          validation: (Rule) => Rule.min(1).max(2).integer(),
        }),
        defineField({
          name: 'tabletColumns',
          title: 'Tablet Columns',
          type: 'number',
          initialValue: 2,
          validation: (Rule) => Rule.min(1).max(3).integer(),
        }),
        defineField({
          name: 'desktopColumns',
          title: 'Desktop Columns',
          type: 'number',
          initialValue: 3,
          validation: (Rule) => Rule.min(1).max(6).integer(),
        }),
        defineField({
          name: 'enableMobileOptimization',
          title: 'Enable Mobile Optimization',
          type: 'boolean',
          initialValue: true,
        }),
      ],
      description: 'Configure responsive behavior for different screen sizes',
    }),
    defineField({
      name: 'searchSettings',
      title: 'Search Settings',
      type: 'object',
      fields: [
        defineField({
          name: 'enableSearch',
          title: 'Enable Search',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'searchPlaceholder',
          title: 'Search Placeholder Text',
          type: 'string',
          initialValue: 'Search properties...',
        }),
        defineField({
          name: 'searchFields',
          title: 'Searchable Fields',
          type: 'array',
          of: [
            {
              type: 'string',
              options: {
                list: [
                  'Title',
                  'Address',
                  'Description',
                  'Features',
                  'Property Type',
                  'Location',
                ],
              },
            },
          ],
          validation: (Rule) => Rule.unique().max(6),
        }),
        defineField({
          name: 'enableRealTimeSearch',
          title: 'Enable Real-time Search',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'searchDebounce',
          title: 'Search Debounce (ms)',
          type: 'number',
          initialValue: 300,
          validation: (Rule) => Rule.min(100).max(1000).integer(),
        }),
      ],
      description: 'Configure search functionality for properties',
    }),
    defineField({
      name: 'analytics',
      title: 'Analytics & Tracking',
      type: 'object',
      fields: [
        defineField({
          name: 'enableTracking',
          title: 'Enable Analytics Tracking',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'trackPropertyViews',
          title: 'Track Property Views',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'trackPropertyClicks',
          title: 'Track Property Clicks',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'trackSearchQueries',
          title: 'Track Search Queries',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'trackFilterUsage',
          title: 'Track Filter Usage',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'customEventPrefix',
          title: 'Custom Event Prefix',
          type: 'string',
          initialValue: 'property_listing',
        }),
      ],
      description: 'Configure analytics and tracking for property interactions',
    }),
    defineField({
      name: 'performance',
      title: 'Performance Settings',
      type: 'object',
      fields: [
        defineField({
          name: 'enableLazyLoading',
          title: 'Enable Lazy Loading',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'enableImageOptimization',
          title: 'Enable Image Optimization',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'enableVirtualization',
          title: 'Enable Virtualization',
          type: 'boolean',
          initialValue: false,
        }),
        defineField({
          name: 'virtualizationThreshold',
          title: 'Virtualization Threshold',
          type: 'number',
          initialValue: 50,
          validation: (Rule) => Rule.min(10).max(200).integer(),
          description: 'Number of properties before enabling virtualization',
        }),
        defineField({
          name: 'enableCaching',
          title: 'Enable Caching',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'cacheDuration',
          title: 'Cache Duration (minutes)',
          type: 'number',
          initialValue: 15,
          validation: (Rule) => Rule.min(1).max(1440).integer(),
        }),
      ],
      description: 'Configure performance optimization settings',
    }),
    defineField({
      name: 'accessibility',
      title: 'Accessibility Settings',
      type: 'object',
      fields: [
        defineField({
          name: 'enableKeyboardNavigation',
          title: 'Enable Keyboard Navigation',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'enableScreenReaderSupport',
          title: 'Enable Screen Reader Support',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'enableHighContrastMode',
          title: 'Enable High Contrast Mode',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'enableFocusIndicators',
          title: 'Enable Focus Indicators',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'enableReducedMotion',
          title: 'Enable Reduced Motion',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'enableLargeText',
          title: 'Enable Large Text Option',
          type: 'boolean',
          initialValue: true,
        }),
      ],
      description:
        'Configure accessibility features for better user experience',
    }),
    defineField({
      name: 'internationalization',
      title: 'Internationalization',
      type: 'object',
      fields: [
        defineField({
          name: 'enableMultiLanguage',
          title: 'Enable Multi-language Support',
          type: 'boolean',
          initialValue: false,
        }),
        defineField({
          name: 'supportedLanguages',
          title: 'Supported Languages',
          type: 'array',
          of: [
            {
              type: 'string',
              options: {
                list: [
                  'English',
                  'Spanish',
                  'French',
                  'German',
                  'Italian',
                  'Portuguese',
                  'Russian',
                  'Chinese',
                  'Japanese',
                  'Korean',
                  'Arabic',
                  'Hindi',
                ],
              },
            },
          ],
          validation: (Rule) => Rule.unique().max(12),
        }),
        defineField({
          name: 'defaultLanguage',
          title: 'Default Language',
          type: 'string',
          initialValue: 'English',
        }),
        defineField({
          name: 'enableRTLSupport',
          title: 'Enable RTL Support',
          type: 'boolean',
          initialValue: false,
        }),
        defineField({
          name: 'dateFormat',
          title: 'Date Format',
          type: 'string',
          options: {
            list: [
              { title: 'MM/DD/YYYY', value: 'MM/DD/YYYY' },
              { title: 'DD/MM/YYYY', value: 'DD/MM/YYYY' },
              { title: 'YYYY-MM-DD', value: 'YYYY-MM-DD' },
            ],
          },
          initialValue: 'MM/DD/YYYY',
        }),
        defineField({
          name: 'currencyFormat',
          title: 'Currency Format',
          type: 'string',
          options: {
            list: [
              { title: 'USD ($)', value: 'USD' },
              { title: 'EUR (€)', value: 'EUR' },
              { title: 'GBP (£)', value: 'GBP' },
              { title: 'JPY (¥)', value: 'JPY' },
              { title: 'CAD (C$)', value: 'CAD' },
              { title: 'AUD (A$)', value: 'AUD' },
            ],
          },
          initialValue: 'USD',
        }),
      ],
      description: 'Configure internationalization and localization settings',
    }),
    defineField({
      name: 'seoSettings',
      title: 'SEO Settings',
      type: 'object',
      fields: [
        defineField({
          name: 'enableStructuredData',
          title: 'Enable Structured Data',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'enableOpenGraph',
          title: 'Enable Open Graph Tags',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'enableTwitterCards',
          title: 'Enable Twitter Cards',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'enableCanonicalUrls',
          title: 'Enable Canonical URLs',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'enableBreadcrumbs',
          title: 'Enable Breadcrumbs',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'enableSitemap',
          title: 'Enable Sitemap Generation',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'metaDescription',
          title: 'Default Meta Description',
          type: 'text',
          initialValue:
            'Browse our collection of premium properties. Find your dream home with detailed information, high-quality images, and expert guidance.',
        }),
        defineField({
          name: 'metaKeywords',
          title: 'Default Meta Keywords',
          type: 'string',
          initialValue:
            'properties, real estate, homes for sale, property listings, real estate agents',
        }),
      ],
      description:
        'Configure SEO settings for better search engine optimization',
    }),
    defineField({
      name: 'socialSharing',
      title: 'Social Sharing',
      type: 'object',
      fields: [
        defineField({
          name: 'enableSocialSharing',
          title: 'Enable Social Sharing',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'socialPlatforms',
          title: 'Social Platforms',
          type: 'array',
          of: [
            {
              type: 'string',
              options: {
                list: [
                  'Facebook',
                  'Twitter',
                  'LinkedIn',
                  'Instagram',
                  'Pinterest',
                  'WhatsApp',
                  'Email',
                  'Copy Link',
                ],
              },
            },
          ],
          validation: (Rule) => Rule.unique().max(8),
        }),
        defineField({
          name: 'shareTitle',
          title: 'Share Title Template',
          type: 'string',
          initialValue: 'Check out this amazing property: {propertyTitle}',
        }),
        defineField({
          name: 'shareDescription',
          title: 'Share Description Template',
          type: 'text',
          initialValue:
            'I found this incredible property that you might be interested in. Take a look at the details and let me know what you think!',
        }),
        defineField({
          name: 'enableWhatsAppSharing',
          title: 'Enable WhatsApp Sharing',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'enableEmailSharing',
          title: 'Enable Email Sharing',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'enableCopyLink',
          title: 'Enable Copy Link',
          type: 'boolean',
          initialValue: true,
        }),
      ],
      description: 'Configure social sharing options for properties',
    }),
    defineField({
      name: 'notifications',
      title: 'Notifications & Alerts',
      type: 'object',
      fields: [
        defineField({
          name: 'enableNotifications',
          title: 'Enable Notifications',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'notificationTypes',
          title: 'Notification Types',
          type: 'array',
          of: [
            {
              type: 'string',
              options: {
                list: [
                  'New Properties',
                  'Price Changes',
                  'Status Updates',
                  'Open House Events',
                  'Market Updates',
                  'Agent Messages',
                ],
              },
            },
          ],
          validation: (Rule) => Rule.unique().max(6),
        }),
        defineField({
          name: 'enableEmailNotifications',
          title: 'Enable Email Notifications',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'enablePushNotifications',
          title: 'Enable Push Notifications',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'enableSMSNotifications',
          title: 'Enable SMS Notifications',
          type: 'boolean',
          initialValue: false,
        }),
        defineField({
          name: 'notificationFrequency',
          title: 'Notification Frequency',
          type: 'string',
          options: {
            list: [
              { title: 'Immediate', value: 'immediate' },
              { title: 'Daily Digest', value: 'daily' },
              { title: 'Weekly Digest', value: 'weekly' },
              { title: 'Monthly Digest', value: 'monthly' },
            ],
          },
          initialValue: 'daily',
        }),
      ],
      description: 'Configure notification and alert settings',
    }),
    defineField({
      name: 'dataManagement',
      title: 'Data Management',
      type: 'object',
      fields: [
        defineField({
          name: 'enableDataExport',
          title: 'Enable Data Export',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'exportFormats',
          title: 'Export Formats',
          type: 'array',
          of: [
            {
              type: 'string',
              options: {
                list: ['CSV', 'Excel', 'PDF', 'JSON', 'XML'],
              },
            },
          ],
          validation: (Rule) => Rule.unique().max(5),
        }),
        defineField({
          name: 'enableDataImport',
          title: 'Enable Data Import',
          type: 'boolean',
          initialValue: false,
        }),
        defineField({
          name: 'importFormats',
          title: 'Import Formats',
          type: 'array',
          of: [
            {
              type: 'string',
              options: {
                list: ['CSV', 'Excel', 'JSON', 'XML'],
              },
            },
          ],
          validation: (Rule) => Rule.unique().max(4),
        }),
        defineField({
          name: 'enableBulkOperations',
          title: 'Enable Bulk Operations',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'enableDataBackup',
          title: 'Enable Data Backup',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'backupFrequency',
          title: 'Backup Frequency',
          type: 'string',
          options: {
            list: [
              { title: 'Daily', value: 'daily' },
              { title: 'Weekly', value: 'weekly' },
              { title: 'Monthly', value: 'monthly' },
            ],
          },
          initialValue: 'weekly',
        }),
      ],
      description: 'Configure data export, import, and management settings',
    }),
    defineField({
      name: 'securityPrivacy',
      title: 'Security & Privacy',
      type: 'object',
      fields: [
        defineField({
          name: 'enableUserAuthentication',
          title: 'Enable User Authentication',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'enableRoleBasedAccess',
          title: 'Enable Role-Based Access Control',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'enableDataEncryption',
          title: 'Enable Data Encryption',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'enableAuditLogging',
          title: 'Enable Audit Logging',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'enablePrivacyControls',
          title: 'Enable Privacy Controls',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'enableGDPRCompliance',
          title: 'Enable GDPR Compliance',
          type: 'boolean',
          initialValue: false,
        }),
        defineField({
          name: 'enableDataRetention',
          title: 'Enable Data Retention Policies',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'dataRetentionPeriod',
          title: 'Data Retention Period (months)',
          type: 'number',
          initialValue: 24,
          validation: (Rule) => Rule.min(1).max(120).integer(),
        }),
        defineField({
          name: 'enableTwoFactorAuth',
          title: 'Enable Two-Factor Authentication',
          type: 'boolean',
          initialValue: false,
        }),
        defineField({
          name: 'enableSessionTimeout',
          title: 'Enable Session Timeout',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'sessionTimeoutMinutes',
          title: 'Session Timeout (minutes)',
          type: 'number',
          initialValue: 30,
          validation: (Rule) => Rule.min(5).max(480).integer(),
        }),
      ],
      description: 'Configure security and privacy settings for property data',
    }),
    defineField({
      name: 'customization',
      title: 'Customization & Theming',
      type: 'object',
      fields: [
        defineField({
          name: 'enableCustomThemes',
          title: 'Enable Custom Themes',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'primaryColor',
          title: 'Primary Color',
          type: 'string',
          initialValue: '#3B82F6',
        }),
        defineField({
          name: 'secondaryColor',
          title: 'Secondary Color',
          type: 'string',
          initialValue: '#10B981',
        }),
        defineField({
          name: 'accentColor',
          title: 'Accent Color',
          type: 'string',
          initialValue: '#F59E0B',
        }),
        defineField({
          name: 'fontFamily',
          title: 'Font Family',
          type: 'string',
          options: {
            list: [
              { title: 'Inter', value: 'Inter' },
              { title: 'Roboto', value: 'Roboto' },
              { title: 'Open Sans', value: 'Open Sans' },
              { title: 'Lato', value: 'Lato' },
              { title: 'Poppins', value: 'Poppins' },
              { title: 'Montserrat', value: 'Montserrat' },
            ],
          },
          initialValue: 'Inter',
        }),
        defineField({
          name: 'enableDarkMode',
          title: 'Enable Dark Mode',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'enableCustomCSS',
          title: 'Enable Custom CSS',
          type: 'boolean',
          initialValue: false,
        }),
        defineField({
          name: 'customCSS',
          title: 'Custom CSS',
          type: 'text',
          description: 'Add custom CSS styles for property listings',
        }),
        defineField({
          name: 'enableCustomJavaScript',
          title: 'Enable Custom JavaScript',
          type: 'boolean',
          initialValue: false,
        }),
        defineField({
          name: 'customJavaScript',
          title: 'Custom JavaScript',
          type: 'text',
          description:
            'Add custom JavaScript functionality for property listings',
        }),
      ],
      description: 'Configure visual customization and theming options',
    }),
    defineField({
      name: 'integrations',
      title: 'Integrations & APIs',
      type: 'object',
      fields: [
        defineField({
          name: 'enableGoogleMaps',
          title: 'Enable Google Maps Integration',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'googleMapsApiKey',
          title: 'Google Maps API Key',
          type: 'string',
        }),
        defineField({
          name: 'enableZillowIntegration',
          title: 'Enable Zillow Integration',
          type: 'boolean',
          initialValue: false,
        }),
        defineField({
          name: 'zillowApiKey',
          title: 'Zillow API Key',
          type: 'string',
        }),
        defineField({
          name: 'enableMLSIntegration',
          title: 'Enable MLS Integration',
          type: 'boolean',
          initialValue: false,
        }),
        defineField({
          name: 'mlsApiEndpoint',
          title: 'MLS API Endpoint',
          type: 'string',
        }),
        defineField({
          name: 'enableCRMIntegration',
          title: 'Enable CRM Integration',
          type: 'boolean',
          initialValue: false,
        }),
        defineField({
          name: 'crmType',
          title: 'CRM Type',
          type: 'string',
          options: {
            list: ['Salesforce', 'HubSpot', 'Pipedrive', 'Zoho', 'Custom'],
          },
        }),
        defineField({
          name: 'enableEmailMarketing',
          title: 'Enable Email Marketing Integration',
          type: 'boolean',
          initialValue: false,
        }),
        defineField({
          name: 'emailMarketingProvider',
          title: 'Email Marketing Provider',
          type: 'string',
          options: {
            list: [
              'Mailchimp',
              'Constant Contact',
              'SendGrid',
              'ConvertKit',
              'Custom',
            ],
          },
        }),
        defineField({
          name: 'enablePaymentProcessing',
          title: 'Enable Payment Processing',
          type: 'boolean',
          initialValue: false,
        }),
        defineField({
          name: 'paymentProvider',
          title: 'Payment Provider',
          type: 'string',
          options: {
            list: ['Stripe', 'PayPal', 'Square', 'Authorize.net', 'Custom'],
          },
        }),
      ],
      description: 'Configure third-party integrations and API connections',
    }),
    defineField({
      name: 'maintenance',
      title: 'Maintenance & Monitoring',
      type: 'object',
      fields: [
        defineField({
          name: 'enableSystemMonitoring',
          title: 'Enable System Monitoring',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'enableErrorTracking',
          title: 'Enable Error Tracking',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'enablePerformanceMonitoring',
          title: 'Enable Performance Monitoring',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'enableUptimeMonitoring',
          title: 'Enable Uptime Monitoring',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'enableLogAggregation',
          title: 'Enable Log Aggregation',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'enableHealthChecks',
          title: 'Enable Health Checks',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'healthCheckInterval',
          title: 'Health Check Interval (minutes)',
          type: 'number',
          initialValue: 5,
          validation: (Rule) => Rule.min(1).max(60).integer(),
        }),
        defineField({
          name: 'enableMaintenanceMode',
          title: 'Enable Maintenance Mode',
          type: 'boolean',
          initialValue: false,
        }),
        defineField({
          name: 'maintenanceMessage',
          title: 'Maintenance Mode Message',
          type: 'text',
          initialValue:
            'We are currently performing scheduled maintenance. Please check back soon.',
        }),
        defineField({
          name: 'enableAutoScaling',
          title: 'Enable Auto Scaling',
          type: 'boolean',
          initialValue: false,
        }),
        defineField({
          name: 'enableBackupAutomation',
          title: 'Enable Backup Automation',
          type: 'boolean',
          initialValue: true,
        }),
      ],
      description: 'Configure system maintenance and monitoring settings',
    }),
    defineField({
      name: 'documentation',
      title: 'Documentation & Help',
      type: 'object',
      fields: [
        defineField({
          name: 'enableHelpSystem',
          title: 'Enable Help System',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'helpContent',
          title: 'Help Content',
          type: 'blockContent',
          description: 'Add help content and documentation for content editors',
        }),
        defineField({
          name: 'enableTooltips',
          title: 'Enable Field Tooltips',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'enableFieldHelp',
          title: 'Enable Field Help Text',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'enableVideoTutorials',
          title: 'Enable Video Tutorials',
          type: 'boolean',
          initialValue: false,
        }),
        defineField({
          name: 'videoTutorials',
          title: 'Video Tutorials',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Video Title',
                  type: 'string',
                }),
                defineField({
                  name: 'description',
                  title: 'Video Description',
                  type: 'text',
                }),
                defineField({
                  name: 'videoUrl',
                  title: 'Video URL',
                  type: 'url',
                }),
                defineField({
                  name: 'thumbnail',
                  title: 'Video Thumbnail',
                  type: 'image',
                  options: { hotspot: true },
                }),
              ],
            },
          ],
        }),
        defineField({
          name: 'enableFAQ',
          title: 'Enable FAQ Section',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'faqItems',
          title: 'FAQ Items',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'question',
                  title: 'Question',
                  type: 'string',
                }),
                defineField({
                  name: 'answer',
                  title: 'Answer',
                  type: 'text',
                }),
              ],
            },
          ],
        }),
      ],
      description:
        'Configure help system and documentation for content editors',
    }),
    defineField({
      name: 'versioning',
      title: 'Versioning & History',
      type: 'object',
      fields: [
        defineField({
          name: 'enableVersioning',
          title: 'Enable Versioning',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'maxVersions',
          title: 'Maximum Versions to Keep',
          type: 'number',
          initialValue: 10,
          validation: (Rule) => Rule.min(1).max(100).integer(),
        }),
        defineField({
          name: 'enableChangeTracking',
          title: 'Enable Change Tracking',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'enableAuditTrail',
          title: 'Enable Audit Trail',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'enableRollback',
          title: 'Enable Rollback Functionality',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'enableDiffView',
          title: 'Enable Diff View',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'enableApprovalWorkflow',
          title: 'Enable Approval Workflow',
          type: 'boolean',
          initialValue: false,
        }),
        defineField({
          name: 'approvalSteps',
          title: 'Approval Steps',
          type: 'array',
          of: [
            {
              type: 'string',
              options: {
                list: [
                  'Content Review',
                  'Legal Review',
                  'Manager Approval',
                  'Final Approval',
                ],
              },
            },
          ],
        }),
        defineField({
          name: 'enablePublishingSchedule',
          title: 'Enable Publishing Schedule',
          type: 'boolean',
          initialValue: false,
        }),
        defineField({
          name: 'enableExpirationDate',
          title: 'Enable Expiration Date',
          type: 'boolean',
          initialValue: false,
        }),
      ],
      description: 'Configure versioning and change tracking settings',
    }),
    defineField({
      name: 'testing',
      title: 'Testing & Quality Assurance',
      type: 'object',
      fields: [
        defineField({
          name: 'enableDataValidation',
          title: 'Enable Data Validation',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'enableContentReview',
          title: 'Enable Content Review',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'enableSpellCheck',
          title: 'Enable Spell Check',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'enableGrammarCheck',
          title: 'Enable Grammar Check',
          type: 'boolean',
          initialValue: false,
        }),
        defineField({
          name: 'enableImageValidation',
          title: 'Enable Image Validation',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'enableLinkValidation',
          title: 'Enable Link Validation',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'enableAccessibilityCheck',
          title: 'Enable Accessibility Check',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'enableSEOCheck',
          title: 'Enable SEO Check',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'enablePerformanceCheck',
          title: 'Enable Performance Check',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'enableSecurityCheck',
          title: 'Enable Security Check',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'enableComplianceCheck',
          title: 'Enable Compliance Check',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'enableAutomatedTesting',
          title: 'Enable Automated Testing',
          type: 'boolean',
          initialValue: false,
        }),
        defineField({
          name: 'testEnvironments',
          title: 'Test Environments',
          type: 'array',
          of: [
            {
              type: 'string',
              options: {
                list: ['Development', 'Staging', 'QA', 'Production'],
              },
            },
          ],
        }),
      ],
      description: 'Configure testing and quality assurance settings',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'galleryImages',
      title: 'Gallery Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
            }),
          ],
        },
      ],
      validation: (Rule) => Rule.max(10),
    }),
    defineField({
      name: 'detailsLabel',
      title: 'Details Label',
      type: 'string',
      initialValue: 'Details',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'details',
      title: 'Details',
      type: 'object',
      fields: [
        defineField({
          name: 'beds',
          title: 'Bedrooms',
          type: 'number',
          validation: (Rule) => Rule.required().min(0).integer(),
        }),
        defineField({
          name: 'baths',
          title: 'Bathrooms',
          type: 'number',
          validation: (Rule) => Rule.required().min(0).integer(),
        }),
        defineField({
          name: 'area',
          title: 'Area (sqm)',
          type: 'number',
          validation: (Rule) => Rule.required().min(0),
        }),
        defineField({
          name: 'garage',
          title: 'Garage Spaces',
          type: 'number',
          validation: (Rule) => Rule.required().min(0).integer(),
        }),
        defineField({
          name: 'yearBuilt',
          title: 'Year Built',
          type: 'number',
          validation: (Rule) => Rule.required().min(1900).max(2025),
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'descriptionLabel',
      title: 'Description Label',
      type: 'string',
      initialValue: 'Description',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'featuresLabel',
      title: 'Features Label',
      type: 'string',
      initialValue: 'Features',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [
        {
          type: 'string',
          options: {
            list: [
              'Air Conditioning',
              'Fireplace',
              'Modern Kitchen',
              'Swimming Pool',
              'Security System',
              'Smart Home',
              'Garage',
              'Balcony',
              'Garden',
              'Hardwood Floors',
              'Solar Panels',
              'Double Glazing',
            ],
          },
        },
      ],
      validation: (Rule) => Rule.unique().max(12),
    }),
  ],
});
