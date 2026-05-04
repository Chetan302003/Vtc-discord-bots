import { SlashCommandBuilder, ChatInputCommandInteraction } from 'discord.js';

export default {
    data: new SlashCommandBuilder()
        .setName('event')
        .setDescription('Event team invitation response commands')
        .addSubcommand(subcommand =>
            subcommand
                .setName('accept')
                .setDescription('Accept an event invitation')
                .addStringOption(option =>
                    option.setName('user')
                        .setDescription('Mention the inviting VTC/person')
                        .setRequired(true)
                )
                .addStringOption(option =>
                    option.setName('slot')
                        .setDescription('Slot name and/or number booked')
                        .setRequired(true)
                )
                .addStringOption(option =>
                    option.setName('role')
                        .setDescription('Your role signature (default: Event Team)')
                        .setRequired(false)
                )
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('reject')
                .setDescription('Decline an event invitation')
                .addStringOption(option =>
                    option.setName('user')
                        .setDescription('Mention the inviting VTC/person')
                        .setRequired(true)
                )
                .addStringOption(option =>
                    option.setName('reason')
                        .setDescription('Reason for rejecting the invitation')
                        .setRequired(false)
                )
                .addStringOption(option =>
                    option.setName('role')
                        .setDescription('Your role signature (default: Event Team)')
                        .setRequired(false)
                )
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('slot_accept')
                .setDescription('Confirm a slot booking for a VTC')
                .addStringOption(option =>
                    option.setName('user')
                        .setDescription('Mention the VTC representative')
                        .setRequired(true)
                )
                .addStringOption(option =>
                    option.setName('event_name')
                        .setDescription('The name of the event')
                        .setRequired(true)
                )
                .addStringOption(option =>
                    option.setName('slot')
                        .setDescription('The slot number/name being booked')
                        .setRequired(true)
                )
                .addStringOption(option =>
                    option.setName('slot_location')
                        .setDescription('The location of the slot (e.g. City name)')
                        .setRequired(true)
                )
                .addStringOption(option =>
                    option.setName('vtc_name')
                        .setDescription('The name of the VTC booking the slot')
                        .setRequired(true)
                )
                .addStringOption(option =>
                    option.setName('event_link')
                        .setDescription('Link to the event page (TruckersMP)')
                        .setRequired(false)
                )
                .addStringOption(option =>
                    option.setName('role')
                        .setDescription('Your role signature (default: Event Team)')
                        .setRequired(false)
                )
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('slot_reject')
                .setDescription('Inform a VTC that a slot is unavailable')
                .addStringOption(option =>
                    option.setName('user')
                        .setDescription('Mention the VTC representative')
                        .setRequired(true)
                )
                .addStringOption(option =>
                    option.setName('event_name')
                        .setDescription('The name of the event')
                        .setRequired(true)
                )
                .addStringOption(option =>
                    option.setName('role')
                        .setDescription('Your role signature (default: Event Team)')
                        .setRequired(false)
                )
        ),
    async execute(interaction: ChatInputCommandInteraction) {
        // This command is primarily handled by the Supabase Edge Function.
        // This local execute is a fallback if run locally.
        await interaction.reply({ content: 'Processing event invitation...', ephemeral: true });
    },
};
