import { createViewModel } from './main-view-model';

export function onNavigatingTo(args) {
  const page = args.object;
  page.bindingContext = createViewModel();
}
export function navigateToBio(args) {
    const page = args.object.page;
    page.frame.navigate("bio-page");
}
export function navigateToSkills(args) {
  const page = args.object.page;
  page.frame.navigate("skills-page");
}
export function navigateToContact(args) {
  const page = args.object.page;
  page.frame.navigate("contact-page");
}