export type navArrType = {
  id?: number;
  title?: string;
  path?: string;
  subMenu?: subMenuType[];
};
export type GalleryType = {
  id?: number;
  path?: string;
  img: {
    src: string;
  };
};
export type subMenuType = {
  id: number;
  title: string;
  path: string;
};

export type OurServicesType = {
  id: number;
  title: string;
  path: string;
};

export type featuredType = {
  id: number;
  title: string;
  path: string;
  img: {
    src: string;
  };
  desc: string;
};
export type clientstype = {
  id: number;
  img: {
    src: string;
  };
};

export type faqtype = {
  id: number;
  title: string;
  content?: contentType[];
};

export type contentType = {
  id: number;
  point: string;
};
export type footerType = {
  id: number;
  title: string;
  path: string;
};
export type faqCareerType = {
  id: number;
  title: string;
  content: faqType[];
};

export type faqType = {
  id: number;
  point: string;
};

export type ServiceBulletType = {
  id: number;
  points: string;
};
export type allClientsType = {
  id: number;
  img: {
    src: string;
  };
};
export type PhotoGalleryType = {
  id: number;
  img: {
    src: string;
  };
};
export type ExploreindemandType = {
  id: number;
  title: string;
  path: string;
};
export type BannerType = {
  id: number;
  title: string;
  path: string;
};
export type OurServicesIncludeType = {
  id: number;
  title: string;
  path: string;
};
export type serviceType = {
  id: number;
  title: string;
  path: string;
  img: {
    src: string;
  };
};
export type sliderType = {
  id: number;
  img: {
    src: string;
  };
};
