'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Comments', 'blogId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Blogs', // Tên bảng mà cột sẽ tham chiếu đến
        key: 'id', // Tên cột trong bảng mà cột này sẽ tham chiếu đến
      },
      onUpdate: 'CASCADE', // Xóa bản ghi liên quan khi bản ghi mẹ được cập nhật
      onDelete: 'CASCADE', // Xóa bản ghi liên quan khi bản ghi mẹ bị xóa
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Comments', 'blogId');
  }
};