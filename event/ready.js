module.exports = {
    name: 'ready',
    once: true,

    async execute(client) {
        console.log(`${client.user.username} is ready.`)

        var compteurStatus = 1
        setInterval(async () => {
            status = [`${c}`]
            compteurStatus = (compteurStatus + 1) % (status.length);
            client.user.setPresence({
                activities: [{
                    name: `${client.guild.cache.get} Guilds`,
                    type: "WATCHING",
                    url: "https://www.twitch.tv/discord"
                  }],
                  status: "online"})
        }, 5000);
    }
}