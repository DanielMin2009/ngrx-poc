// Layouts
export const verticallyTop = (featureClass: string) =>
  `lab-layout lab-feature__${featureClass} lab-02-main-layout lab-02-a-main-layout__vertically-top`;
export const verticallyCentered = (featureClass: string) =>
  `lab-layout lab-feature__${featureClass} lab-02-main-layout lab-02-b-main-layout__vertically-centered`;
export const spaceBetween = (featureClass: string) =>
  `lab-layout lab-feature__${featureClass} lab-02-main-layout lab-02-c-main-layout__space-between`;

export const LayoutTypeClass = {
  // Common
  Login: 'lab-layout lab-00-login-layout',
  Dashboard: 'lab-layout lab-01-dashboard-layout',
  // Users
  UsersMainVerticallyTop: verticallyTop('users'),
  UsersMainVerticallyCentered: verticallyCentered('users'),
  UsersMainSpaceBetween: spaceBetween('users'),
};
