var columnSchema = [
    {
        name: "revision_count__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "revision_count__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "revision_count__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "word_count__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "word_count__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "word_count__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "sentence_count__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "sentence_count__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "sentence_count__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "hours__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "hours__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "hours__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "minutes__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "minutes__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "minutes__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L1_1b_common_noun_count__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L1_1b_common_noun_count__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L1_1b_common_noun_count__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L1_1b_possessive_noun_count__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L1_1b_possessive_noun_count__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L1_1b_possessive_noun_count__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L1_1b_proper_noun_count__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L1_1b_proper_noun_count__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L1_1b_proper_noun_count__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L1_1c_plural_noun_count__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L1_1c_plural_noun_count__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L1_1c_plural_noun_count__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L1_1c_singular_noun_count__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L1_1c_singular_noun_count__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L1_1c_singular_noun_count__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L1_1c_verb_disagreement_count__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L1_1c_verb_disagreement_count__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L1_1c_verb_disagreement_count__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L1_1e_future_tense__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L1_1e_future_tense__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L1_1e_future_tense__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L1_1e_past_tense__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L1_1e_past_tense__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L1_1e_past_tense__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L1_1e_present_tense__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L1_1e_present_tense__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L1_1e_present_tense__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L1_1f_adjective_count__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L1_1f_adjective_count__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L1_1f_adjective_count__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L1_1g_conjunction_count__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L1_1g_conjunction_count__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L1_1g_conjunction_count__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L1_1h_article_determine_count__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L1_1h_article_determine_count__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L1_1h_article_determine_count__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L1_1h_other_determiner_count__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L1_1h_other_determiner_count__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L1_1h_other_determiner_count__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L1_1i_preposition_count__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L1_1i_preposition_count__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L1_1i_preposition_count__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L1_1j_exclamatory_sentence_count__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L1_1j_exclamatory_sentence_count__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L1_1j_exclamatory_sentence_count__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L1_1j_imperative_sentence_count__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L1_1j_imperative_sentence_count__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L1_1j_imperative_sentence_count__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L1_1j_interrogative_sentence_count__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L1_1j_interrogative_sentence_count__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L1_1j_interrogative_sentence_count__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L1_2a_capitalized_date_count__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L1_2a_capitalized_date_count__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L1_2a_capitalized_date_count__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L1_2a_capitalized_name_count__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L1_2a_capitalized_name_count__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L1_2a_capitalized_name_count__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L1_2b_with_end_punctuation__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L1_2b_with_end_punctuation__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L1_2b_with_end_punctuation__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L1_2b_without_end_punctuation__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L1_2b_without_end_punctuation__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L1_2b_without_end_punctuation__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L1_2d_misspellings__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L1_2d_misspellings__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L1_2d_misspellings__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L2_1a_collective_nouns__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L2_1a_collective_nouns__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L2_1a_collective_nouns__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L2_1b_irregular_plural_nouns__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L2_1b_irregular_plural_nouns__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L2_1b_irregular_plural_nouns__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L2_1c_reflexive_pronouns__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L2_1c_reflexive_pronouns__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L2_1c_reflexive_pronouns__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L2_1d_irregular_verbs_count__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L2_1d_irregular_verbs_count__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L2_1d_irregular_verbs_count__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L2_1e_adjectives_count__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L2_1e_adjectives_count__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L2_1e_adjectives_count__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L2_1e_adverbs_count__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L2_1e_adverbs_count__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L2_1e_adverbs_count__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L3_1b_irregular_noun_count__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L3_1b_irregular_noun_count__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L3_1b_irregular_noun_count__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L3_1b_regular_noun_count__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L3_1b_regular_noun_count__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L3_1b_regular_noun_count__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L3_1c_abstract_noun_count__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L3_1c_abstract_noun_count__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L3_1c_abstract_noun_count__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L3_1d_irregular_verbs__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L3_1d_irregular_verbs__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L3_1d_irregular_verbs__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L3_1d_regular_verbs__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L3_1d_regular_verbs__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L3_1d_regular_verbs__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L3_1e_Future_count__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L3_1e_Future_count__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L3_1e_Future_count__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L3_1e_Past_count__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L3_1e_Past_count__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L3_1e_Past_count__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L3_1e_Present_count__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L3_1e_Present_count__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L3_1e_Present_count__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L3_1g_comparatives__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L3_1g_comparatives__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L3_1g_comparatives__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L3_1g_double_comparative_errors__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L3_1g_double_comparative_errors__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L3_1g_double_comparative_errors__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L3_1g_double_superlative_errors__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L3_1g_double_superlative_errors__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L3_1g_double_superlative_errors__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L3_1g_irregular_comparative_errors__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L3_1g_irregular_comparative_errors__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L3_1g_irregular_comparative_errors__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L3_1g_irregular_superlative_errors__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L3_1g_irregular_superlative_errors__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L3_1g_irregular_superlative_errors__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L3_1g_superlatives__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L3_1g_superlatives__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L3_1g_superlatives__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L3_1h_conjunctions__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L3_1h_conjunctions__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L3_1h_conjunctions__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L3_1i_complex__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L3_1i_complex__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L3_1i_complex__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L3_1i_compound__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L3_1i_compound__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L3_1i_compound__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L3_1i_compound_complex__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L3_1i_compound_complex__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L3_1i_compound_complex__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L3_1i_relative_complex__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L3_1i_relative_complex__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L3_1i_relative_complex__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L3_1i_simple__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L3_1i_simple__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L3_1i_simple__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L3_1i_subordinate_fragment__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L3_1i_subordinate_fragment__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L3_1i_subordinate_fragment__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L3_2d_possessive_endings__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L3_2d_possessive_endings__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L3_2d_possessive_endings__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L3_2d_possessive_pronouns__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L3_2d_possessive_pronouns__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L3_2d_possessive_pronouns__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L4_1a_relative_adverbs__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L4_1a_relative_adverbs__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L4_1a_relative_adverbs__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L4_1a_relative_pronouns__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L4_1a_relative_pronouns__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L4_1a_relative_pronouns__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L4_1b_FutureProgressive_count__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L4_1b_FutureProgressive_count__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L4_1b_FutureProgressive_count__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L4_1b_PastProgressive_count__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L4_1b_PastProgressive_count__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L4_1b_PastProgressive_count__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L4_1b_PresentProgressive_count__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L4_1b_PresentProgressive_count__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L4_1b_PresentProgressive_count__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L4_1c_modal_counts__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L4_1c_modal_counts__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L4_1c_modal_counts__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L4_1d_adjective_order_switched_count__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L4_1d_adjective_order_switched_count__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L4_1d_adjective_order_switched_count__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L4_1g_their_there_theyre_error_count__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L4_1g_their_there_theyre_error_count__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L4_1g_their_there_theyre_error_count__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L4_1g_to_too_two_error_count__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L4_1g_to_too_two_error_count__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L4_1g_to_too_two_error_count__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L4_1g_your_youre_error_count__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L4_1g_your_youre_error_count__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L4_1g_your_youre_error_count__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L4_2a_capitalization_errors__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L4_2a_capitalization_errors__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L4_2a_capitalization_errors__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L5_1b_FuturePerfectProgressive_count__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L5_1b_FuturePerfectProgressive_count__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L5_1b_FuturePerfectProgressive_count__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L5_1b_FuturePerfect_count__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L5_1b_FuturePerfect_count__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L5_1b_FuturePerfect_count__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L5_1b_PastPerfectProgressive_count__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L5_1b_PastPerfectProgressive_count__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L5_1b_PastPerfectProgressive_count__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L5_1b_PastPerfect_count__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L5_1b_PastPerfect_count__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L5_1b_PastPerfect_count__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L5_1b_PresentPerfectProgressive_count__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L5_1b_PresentPerfectProgressive_count__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L5_1b_PresentPerfectProgressive_count__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L5_1b_PresentPerfect_count__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L5_1b_PresentPerfect_count__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L5_1b_PresentPerfect_count__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L6_2a_incorrect_restrictive__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L6_2a_incorrect_restrictive__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L6_2a_incorrect_restrictive__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L7_1c_dangling_modifiers__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L7_1c_dangling_modifiers__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L7_1c_dangling_modifiers__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L7_2a_correct_coordinate_adj_usage__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L7_2a_correct_coordinate_adj_usage__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L7_2a_correct_coordinate_adj_usage__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L7_2a_incorrect_coordinate_adj_usage__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L7_2a_incorrect_coordinate_adj_usage__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L7_2a_incorrect_coordinate_adj_usage__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L8_1a_gerund_count__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L8_1a_gerund_count__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L8_1a_gerund_count__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L8_1a_infinitive_count__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L8_1a_infinitive_count__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L8_1a_infinitive_count__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L8_1a_participle_count__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L8_1a_participle_count__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L8_1a_participle_count__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L8_1b_passive_voice_count__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L8_1b_passive_voice_count__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L8_1b_passive_voice_count__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L8_1b_percentage_passive__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L8_1b_percentage_passive__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L8_1b_percentage_passive__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L8_1c_conditional_count__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L8_1c_conditional_count__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L8_1c_conditional_count__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L8_1c_imperative_count__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L8_1c_imperative_count__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L8_1c_imperative_count__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L8_1c_indicative_count__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L8_1c_indicative_count__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L8_1c_indicative_count__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L8_1c_interrogative_count__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L8_1c_interrogative_count__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L8_1c_interrogative_count__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L8_1c_subjective_count__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L8_1c_subjective_count__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L8_1c_subjective_count__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L8_1d_incorrect_shift_count__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L8_1d_incorrect_shift_count__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L8_1d_incorrect_shift_count__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L8_2a_pauses_count__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L8_2a_pauses_count__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L8_2a_pauses_count__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L8_2b_omissions_count__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L8_2b_omissions_count__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L8_2b_omissions_count__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L910_1a_nonparallel_count__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L910_1a_nonparallel_count__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L910_1a_nonparallel_count__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L910_1a_parallel_count__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L910_1a_parallel_count__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L910_1a_parallel_count__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L910_1b_absolute_phrase_count__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L910_1b_absolute_phrase_count__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L910_1b_absolute_phrase_count__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L910_1b_adjectival_phrase_variety__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L910_1b_adjectival_phrase_variety__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L910_1b_adjectival_phrase_variety__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L910_1b_adverbial_clause_count__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L910_1b_adverbial_clause_count__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L910_1b_adverbial_clause_count__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L910_1b_adverbial_phrase_variety__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L910_1b_adverbial_phrase_variety__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L910_1b_adverbial_phrase_variety__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L910_1b_dependent_clause_count__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L910_1b_dependent_clause_count__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L910_1b_dependent_clause_count__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L910_1b_independent_clause_count__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L910_1b_independent_clause_count__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L910_1b_independent_clause_count__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L910_1b_noun_clause_count__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L910_1b_noun_clause_count__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L910_1b_noun_clause_count__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L910_1b_noun_phrase_variety__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L910_1b_noun_phrase_variety__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L910_1b_noun_phrase_variety__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L910_1b_participial_phrase_count__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L910_1b_participial_phrase_count__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L910_1b_participial_phrase_count__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L910_1b_prepositional_phrase_variety__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L910_1b_prepositional_phrase_variety__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L910_1b_prepositional_phrase_variety__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L910_1b_relative_clause_count__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L910_1b_relative_clause_count__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L910_1b_relative_clause_count__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L910_1b_verb_phrase_variety__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L910_1b_verb_phrase_variety__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L910_1b_verb_phrase_variety__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L910_2a_conjunctive_adverb_count__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L910_2a_conjunctive_adverb_count__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L910_2a_conjunctive_adverb_count__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L910_2a_semicolon_count__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L910_2a_semicolon_count__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L910_2a_semicolon_count__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L910_2b_colon_count__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L910_2b_colon_count__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L910_2b_colon_count__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L1112_2a_correct_hyphenation__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L1112_2a_correct_hyphenation__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L1112_2a_correct_hyphenation__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L1112_2a_incorrect_hyphenation__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L1112_2a_incorrect_hyphenation__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "L1112_2a_incorrect_hyphenation__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "readability_ARI__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "readability_ARI__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "readability_ARI__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "readability_ColemanLiauIndex__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "readability_ColemanLiauIndex__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "readability_ColemanLiauIndex__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "readability_FleschKincaidGradeLevel__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "readability_FleschKincaidGradeLevel__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "readability_FleschKincaidGradeLevel__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "readability_FleschReadingEase__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "readability_FleschReadingEase__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "readability_FleschReadingEase__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "readability_GunningFogIndex__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "readability_GunningFogIndex__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "readability_GunningFogIndex__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "readability_LIX__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "readability_LIX__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "readability_LIX__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "readability_SMOGIndex__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "readability_SMOGIndex__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "readability_SMOGIndex__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "soph_connectives_frequency__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "soph_connectives_frequency__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "soph_connectives_frequency__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "soph_content_word_ratio__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "soph_content_word_ratio__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "soph_content_word_ratio__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "soph_lexical_sophistication__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "soph_lexical_sophistication__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "soph_lexical_sophistication__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "soph_linguistic_creativity__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "soph_linguistic_creativity__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "soph_linguistic_creativity__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "soph_median_sentence_length__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "soph_median_sentence_length__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "soph_median_sentence_length__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "soph_punctuation_frequency__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "soph_punctuation_frequency__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "soph_punctuation_frequency__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "soph_syntactic_sophistication__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "soph_syntactic_sophistication__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "soph_syntactic_sophistication__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "soph_unrecognized_words__per_revision",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "soph_unrecognized_words__per_sentence",
        type: "number",
        before: function(v) { return Number(v) }
    },
    {
        name: "soph_unrecognized_words__per_word",
        type: "number",
        before: function(v) { return Number(v) }
    },
]
module.exports = columnSchema;

