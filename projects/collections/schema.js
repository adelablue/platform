//helper schemas for the projectschema dataStore field

ProjectMediaFileSchema = new SimpleSchema({
  "id": {
    type: String,
    optional:true,
    label: "File",
    autoform: {
      afFieldInput: {
        type: "fileUpload",
        collection: "projectMedia",
        label: "choose file",
        optional:true
      }
    }
  }
});

ProjectMediaLibrarySchema = new SimpleSchema({
  files: {
    type: [ProjectMediaFileSchema],
    label: "List of files",
    optional:true
  }
});

KeyStakeHolderSchema = new SimpleSchema({ //temporary schema of a certain category of users that will be implemented in later iterations
  name: {
    type:String,
    label: "The name of the stakeholder"
  },
  media: { //used to store logos/images etc of the stakeholders
    type: ProjectMediaLibrarySchema,
    label: "Media library for this stakeholder",
    optional:true
  },
  description: {
    type:String,
    label: "Describes the stakeholders and its role in this project"
  }
});

ProjectEventSchema = new SimpleSchema({
  title: {
    type:String,
    label:"Title of this event"
  },
  date: {
    type:Date,
    label:"The date of the event",
    autoform: {
      afFieldInput: {
        type: "bootstrap-datepicker",
        "data-date-autoclose": "true"
      }
    }
  },
  description: {
    type:String,
    label:"Describe the event"
  },
  meta: {
    type:[Object], // meta data about this event
    optional:true
  },
  media: { //used to store logos/images etc of the event
    type: ProjectMediaLibrarySchema,
    label: "Media library for this event"
  }
});

ProjectDataStoreSchema = new SimpleSchema({
  //this schema is used to store lots of metadata about RT Projects, good for not polluting the ProjectsSchema with arbitrary/temporary fields
  keyContributors: {
    type:[KeyStakeHolderSchema],
    label: "List of key contributors",
    optional:true
  },
  problemOwners: {
    type:[KeyStakeHolderSchema],
    label: "List of Problem Owners",
    optional:true
  },
  projectOwners: {
    type:[KeyStakeHolderSchema],
    label: "List of Project Owners",
    optional:true
  },
  productOwners: {
    type:[KeyStakeHolderSchema],
    label: "List of Product Owners",
    optional:true
  },
  history: {
    type:[ProjectEventSchema],
    label: "List of events",
    optional:true

  }
});

// Schema for Projects collection
ProjectsSchema = new SimpleSchema({
  "name": {
    type: String,
    label: "Project Name"
  },
  "description": {
    type: String,
    label: "Project Description (maximum 500 characters)",
    max: 500
  },
  "shortDescription": {
    type: String,
    label: "Project Short Description (maximum 140 characters)",
    max: 140
  },

  "challengeCategories": {
    type: [String],
    label: "Challenge Categories",
    allowedValues: ['social', 'bureaucracy', 'housing', 'education',
    'language', 'employment', 'coordination'],
    autoform: {
      options: [
        {label: "Social", value: "social"},
        {label: "Bureaucracy", value: "bureaucracy"},
        {label: "Housing", value: "housing"},
        {label: "Education", value: "education"},
        {label: "Language", value: "language"},
        {label: "Employment", value: "employment"},
        {label: "Coordination", value: "coordination"}
      ]
    }
  },

  "solution": {
    type: Object,
    label: "Type of solution"
  },
  "solution.isTech":{
    type:Boolean,
    label:"Is this solution predominalty mediated by technology?"
  },
  "solution.description":{
    type:String,
    label:"Description of solution",
    max: 500
  },

  // TODO: auto-associate user ID that created project
  // "contactPersonId": {
  //   type: String,
  //   label: "Contact Person ID",
  //   regEx: SimpleSchema.RegEx.Id,
  //   optional: true
  // },
  // TODO: Add 'Challenge' feature
  // "challengeDescription": {
  //   type: String,
  //   label: "Challenge Description"
  // },
  // "challengeCategories": {
  //   type: [String],
  //   label: "Challenge Categories"
  // },

  "tags": {
    type: [String],
    label: "Tags"
  },

  // The actual date the project began
  "startupDate": {
    type: Date,
    label: "Project Startup Date",
    autoform: {
      afFieldInput: {
        type: "bootstrap-datepicker",
        "data-date-autoclose": "true"
      }
    }
  },

  "currentStage": {
    type: String,
    allowedValues: [
      'initiation',
      'planning',
      'implementationExecution',
      'operationMonitoring',
      'closing'
    ],
    optional: true,
    label: "Select current project stage",
    autoform: {
      options: [
        {label: "Initiation", value: "initiation"},
        {label: "Planning", value: "planning"},
        {label: "Implementation / Execution", value: "implementationExecution"},
        {label: "Operation / Monitoring", value: "operationMonitoring"},
        {label: "Closing", value: "closing"}
      ]
    }
  },

  // TODO: add Teams feature
  // "teamIds": {
  //   type: [String],
  //   label: "Team IDs",
  //   regEx: SimpleSchema.RegEx.Id,
  //   optional: true
  // },
  // "teamDescription": {
  //   type: String,
  //   label: "Team Description"
  // },
  // "currentStage": {
  //   type: String,
  //   label: "Current Stage"
  // },
  // "startupDate": {
  //   type: Date,
  //   label: "Startup Date"
  // },
  // TODO: Add "Target Groups" feature
  // "targetGroups": {
  //   type: [String],
  //   label: "Target Groups"
  // },
  // "targetLocations": {
  //   type: [String],
  //   label: "Target Locations"
  // },
  "targetPlatforms": {
    type: [String],
    label: "Target Platforms",
    optional: true,
    allowedValues: ['web', 'ios', 'android', 'windows-phone', 'other'],
    autoform: {
      type: "select-checkbox",
      options: function () {
        return [
          {label: "Web", value: "web"},
          {label: "iOS", value: "ios"},
          {label: "Android", value: "android"},
          {label: "Windows Phone", value: "windows-phone"},
          {label: "Other", value: "other"}
        ];
      }
    }
  },

  "postalAddress": {
    type: Object,
    label: "Postal Address"
  },
  "postalAddress.city":{
    type:String,
    label:"City"
  },
  "postalAddress.country":{
    type:String,
    label:"Country"
  },

  "links": {
    type: [Object],
    label: "Links"
  },
  "links.$.name":{
    type: String,
    label: "Name"
  },
  "links.$.url":{
    type: String,
    label: "URL",
    regEx: SimpleSchema.RegEx.Url
  },
  "links.$.type": {
    type:String,
    label: "Type of URL",
    allowedValues: ['web', 'article','blog','facebook', 'twitter', 'instagram', 'blogger','linkedin','other','appStore','googlePlay','windowsStore'],
    autoform: {
      options: [
        //generic link types
        {label: "Web", value: "web"},
        {label: "Article", value: "article"},
        {label: 'Blog', value:"blog"},
        {label: "Other", value:"other"},
        //appstores
        {label: 'App Store', value:"appStore"},
        {label: 'Google Play', value:"googlePlay"},
        {label: 'Windows Store', value:"windowsStore"},
        //social media types
        {label: "Blogger", value: "blogger"},
        {label: "Facebook", value: "facebook"},
        {label: "Twitter", value: "twitter"},
        {label: "Instagram", value: "instagram"},
        {label: "Linkedin", value: "linkedin"}
      ]
    }
  },

  // The date the project was submitted to refugeetech platform
  "dateListed": {
    type: Date,
    label: "Date Listed",
    autoValue: function () {
      if (this.isInsert) {
        return new Date();
      } else if (this.isUpsert) {
        return {$setOnInsert: new Date()};
      } else {
        this.unset();  // Prevent user from supplying their own value
      }
    }
  },
  media: {
    type: ProjectMediaLibrarySchema,
    label: "Project Media Library",
    optional:true
  },
  isRTProject: {
    type:Boolean,
    label: "Is this project a result of the Refugee Tech process?",
  },
  dataStore: { //this object will contain everything else about a project; currently only used for RT Projects
    type:ProjectDataStoreSchema,
    optional:true
  }
});

Projects.attachSchema(ProjectsSchema);
