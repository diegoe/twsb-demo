<?php
$config['system.performance']['css']['preprocess'] = FALSE;
$config['system.performance']['js']['preprocess'] = FALSE;

$settings['cache']['bins']['render'] = 'cache.backend.null';
$settings['cache']['bins']['dynamic_page_cache'] = 'cache.backend.null';
$settings['cache']['bins']['page'] = 'cache.backend.null';

$settings['container_yamls'][] = $app_root . '/' . $site_path . '/services.local.yml';

/* Use Storybook settings, if available */
if (file_exists($app_root . '/' . $site_path . '/services.storybook.yml')) {
  $settings['container_yamls'][] = $app_root . '/' . $site_path . '/services.storybook.yml';
}
