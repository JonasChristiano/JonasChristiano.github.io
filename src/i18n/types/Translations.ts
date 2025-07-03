type Translations = {
  [key: string]: {
    home: {
      title: string;
      subtitle: string;
      description: string;
    };
    about: {
      title: string;
      description: string;
    };
    projects: {
      title: string;
      description: string;
    };
    contact: {
      title: string;
      description: string;
    };
    footer: {
      text: string;
    };
    error: {
      notFound: string;
      serverError: string;
    };
    navigation: {
      home: string;
      about: string;
      projects: string;
      contact: string;
    };
    buttons: {
      learnMore: string;
      viewProject: string;
      sendMessage: string;
    };
    messages: {
      welcome: string;
      thankYou: string;
    };
    form: {
      name: string;
      email: string;
      message: string;
      submit: string;
    };
};

export type { Translations };