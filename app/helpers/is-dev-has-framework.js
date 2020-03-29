import { helper } from '@ember/component/helper';

export default helper(function isDevHasFramework(params) {
  const [frameworks, selectedFramework] = params;
  if (selectedFramework !== 'All frameworks') {
    return frameworks.some(framework => framework === selectedFramework);
  }
  return true;
});
