const db = require('../app/config/db');

async function createTasksTable() {
  try {
    const sql = `CREATE TABLE IF NOT EXISTS tasks (
      id VARCHAR(36) PRIMARY KEY,
      user_id INT NOT NULL,

      title VARCHAR(255) NOT NULL,
      description TEXT,

      startTaskAt DATETIME NULL,
      endTaskAt DATETIME NULL,

      status ENUM('to_do','pending','completed','canceled') DEFAULT 'to_do',

      version INT DEFAULT 1,
      is_deleted BOOLEAN DEFAULT 0,

      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;`;

    await db.query(sql);
    console.log('tasks table created or already exists');
    process.exit(0);
  } catch (err) {
    console.error('Failed to create tasks table:', err.message || err);
    process.exit(1);
  }
}

createTasksTable();
