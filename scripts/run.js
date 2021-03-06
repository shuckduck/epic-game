const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(
        ["Stethoscope", "Bandage", "Ibuprofen"],
        [10, 1, 5],
        [10, 20, 30],
        ["https://i.imgur.com/u7N7fPy.jpeg", "https://i.imgur.com/NwkAoPm.jpg", "https://i.imgur.com/FavIJ2V.png"],
        "Spongebob Squarepants",
        "https://i.imgur.com/a4BzksN.jpg",
        100,
        5
    );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);

    let txn = await gameContract.mintItem(2);
    await txn.wait();

    txn = await gameContract.healPatient();
    await txn.wait();

    txn = await gameContract.healPatient();
    await txn.wait();

    console.log(await gameContract.patient());
};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();
