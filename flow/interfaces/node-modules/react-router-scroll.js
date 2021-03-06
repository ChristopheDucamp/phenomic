type useScroll = (
  shouldUpdateScroll?: (
    prevRouterProps: Object | null,
    routerProps: Object
  ) => boolean | Array<number>
) => Function

declare module "react-router-scroll" {
  declare var exports: useScroll;
}

declare module "react-router-scroll/lib/useScroll" {
  declare var exports: useScroll
}
