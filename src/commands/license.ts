import { SlashCommandBuilder, ChatInputCommandInteraction, GuildMember, PermissionFlagsBits } from 'discord.js';
import { config } from '../config';

export default {
    data: new SlashCommandBuilder()
        .setName('license')
        .setDescription('Generate an Aura VTC License')
        .addStringOption(option =>
            option.setName('name')
                .setDescription('The name to display on the license')
                .setRequired(true))
        .addIntegerOption(option =>
            option.setName('truckersmp_id')
                .setDescription('Your TruckersMP Account ID')
                .setRequired(true)),
    async execute(interaction: ChatInputCommandInteraction) {
        const member = interaction.member as GuildMember;
        const hasHR = config.ROLE_HR_TEAM ? member.roles.cache.has(config.ROLE_HR_TEAM) : false;
        const hasManagement = config.ROLE_MANAGEMENT_TEAM ? member.roles.cache.has(config.ROLE_MANAGEMENT_TEAM) : false;

        // Ensure the person using this is an HR, Management, or Administrator
        if (!hasHR && !hasManagement && !member.permissions.has(PermissionFlagsBits.Administrator)) {
            return interaction.reply({ content: '❌ You require the HR or Management role to use this command.', ephemeral: true });
        }

        // This command is handled by the Supabase Edge Function.
        // This local code is here to allow the deploy script to register the command with Discord.
        await interaction.reply({ content: 'Generating license...', ephemeral: true });
    },
};
