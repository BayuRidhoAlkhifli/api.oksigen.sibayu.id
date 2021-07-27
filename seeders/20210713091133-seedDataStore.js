'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    

    // Store Details
    await queryInterface.bulkInsert('StoreDetails', [{
      storeId: 1,
      operationHourId: 1,
      createdAt: '2021-02-18 00:00:00',
      updatedAt: '2021-02-18 00:00:00',
    },{
      storeId: 1,
      operationHourId: 2,
      createdAt: '2021-02-18 00:00:00',
      updatedAt: '2021-02-18 00:00:00',
    },{
      storeId: 1,
      operationHourId: 3,
      createdAt: '2021-02-18 00:00:00',
      updatedAt: '2021-02-18 00:00:00',
    },{
      storeId: 1,
      operationHourId: 4,
      createdAt: '2021-02-18 00:00:00',
      updatedAt: '2021-02-18 00:00:00',
    },{
      storeId: 1,
      operationHourId: 5,
      createdAt: '2021-02-18 00:00:00',
      updatedAt: '2021-02-18 00:00:00',
    },{
      storeId: 1,
      operationHourId: 6,
      createdAt: '2021-02-18 00:00:00',
      updatedAt: '2021-02-18 00:00:00',
    },{
      storeId: 1,
      operationHourId: 7,
      createdAt: '2021-02-18 00:00:00',
      updatedAt: '2021-02-18 00:00:00',
    }])
    
    // Store
    await queryInterface.bulkInsert('Stores', [{
      storeName: 'Refil Oksigen',
      phone: '+622192610987',
      address: 'Jl. Tanah Baru, Pancoran MAS, Kec. Pancoran Mas, Kota Depok, Jawa Barat 16426',
      mapLink: 'https://goo.gl/maps/FVw21JqNbaheWhSS6',
      regenciesId: 1,
      createdAt: '2021-02-18 00:00:00',
      updatedAt: '2021-02-18 00:00:00',
    }])

    // Operation Hour
    await queryInterface.bulkInsert('OperationHours', [{
      days: 'Senin',
      open: '08:00',
      close: '21:00',
      isClosed: 0,
      isOpen24Hours: 0,
      createdAt: '2021-02-18 00:00:00',
      updatedAt: '2021-02-18 00:00:00',
    },{
      days: 'Selasa',
      open: '08:00',
      close: '21:00',
      isClosed: 0,
      isOpen24Hours: 0,
      createdAt: '2021-02-18 00:00:00',
      updatedAt: '2021-02-18 00:00:00',
    },{
      days: 'Rabu',
      open: '08:00',
      close: '21:00',
      isClosed: 0,
      isOpen24Hours: 0,
      createdAt: '2021-02-18 00:00:00',
      updatedAt: '2021-02-18 00:00:00',
    },{
      days: 'Kamis',
      open: '08:00',
      close: '21:00',
      isClosed: 0,
      isOpen24Hours: 0,
      createdAt: '2021-02-18 00:00:00',
      updatedAt: '2021-02-18 00:00:00',
    },{
      days: 'Jumat',
      open: '08:00',
      close: '21:00',
      isClosed: 0,
      isOpen24Hours: 0,
      createdAt: '2021-02-18 00:00:00',
      updatedAt: '2021-02-18 00:00:00',
    },{
      days: 'Sabtu',
      open: '08:00',
      close: '21:00',
      isClosed: 0,
      isOpen24Hours: 0,
      createdAt: '2021-02-18 00:00:00',
      updatedAt: '2021-02-18 00:00:00',
    },{
      days: 'Minggu',
      open: '08:00',
      close: '21:00',
      isClosed: 0,
      isOpen24Hours: 0,
      createdAt: '2021-02-18 00:00:00',
      updatedAt: '2021-02-18 00:00:00',
    }])

    // Regencies
    // await queryInterface.bulkInsert('Regencies', [{
    //   name: "Depok",
    //   createdAt: '2021-02-18 00:00:00',
    //   updatedAt: '2021-02-18 00:00:00',
    // },{
    //   name: "Jakarta",
    //   createdAt: '2021-02-18 00:00:00',
    //   updatedAt: '2021-02-18 00:00:00',
    // }])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
