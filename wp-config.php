<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'heritage1');

/** MySQL database username */
define('DB_USER', 'heritage1');

/** MySQL database password */
define('DB_PASSWORD', '285192');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '9oflpauvw9ridhvtf3neq7aapx2p2s8fyphe1ugnld2vvxscfogmijtdgjqyhpin');
define('SECURE_AUTH_KEY',  'whu9afgcjoswf5gpt2gsrhhtgtmroarmfdsi9ikejgghzhtyqufh0w5mvf3ej7k4');
define('LOGGED_IN_KEY',    'rhrshhsnomr77bbow5gphaz5hup66vku1zg7pdqppwqysjdvxzenl0wqyb1aixyi');
define('NONCE_KEY',        'zoupspbxrffzch7iuiyzewnfenmsuf5ecz1vafo9sd2xtnxcqjav08knpnauvi5f');
define('AUTH_SALT',        'pgxzftmmitxvuvcyfsyxowr8e1zdpbhwivihdjjkqinttws4bbpb47y6i3hpl0u6');
define('SECURE_AUTH_SALT', 'vg9wvlbldea9vuyrpmypjw9kv4czbeljkvuvxa82ye3ukcxjiitmuuilomebrzqd');
define('LOGGED_IN_SALT',   'epr10x9rjpkm7ih6hlydvozcrgongdrmztcajtgpkagkcpia0c9qgkjbtih21gz1');
define('NONCE_SALT',       'qeahplzg5iff5lcxyroparivpkgk8vvw9iheq54qb51isvqjlkbx8socmjowlfcv');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wpeh_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
