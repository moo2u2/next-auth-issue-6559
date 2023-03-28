import * as MyComponent from '../components/MyComponent';

const components = new Map();

components.set('MyComponent', MyComponent);

export function componentModule(componentName: string) {
  const component = components.get(componentName);

  // check that component is lazy loading module
  if (!component?.default && component?.module) {
    // return js dynamic import
    return component.module();
  }

  return component;
}

function baseComponentFactory(componentName: string, exportName?: string, isEditing?: boolean) {
  const component = components.get(componentName);

  // check that component should be dynamically imported
  if (component?.element) {
    // return next.js dynamic import
    return component.element(isEditing);
  }

  if (exportName) {
    return component[exportName];
  }

  return component?.Default || component?.default || component;
}
  
export function componentFactory(componentName: string, exportName?: string) {
  return baseComponentFactory(componentName, exportName, false);
}

export function editingComponentFactory(componentName: string, exportName?: string) {
  return baseComponentFactory(componentName, exportName, true);
}
