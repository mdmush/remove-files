# Remove Multiple Files

GitHub Action to removes multiple files or folders in a cross-platform way.

Created by Mohd Mushfique (mdmush).

# Installation

Make sure local and third-party actions are enabled for your repository, then follow the instructions in the Usage section.

## Usage

Use this action in any step like so:

```yaml
- name: Remove Files
  uses: mdmush/remove-files@v1.0.0
  with:
    file-paths: |
      /path/to/file1
      /path/to/file2
      /path/to/file3
```

Additional Information:

- This action leverages [`io.rmRF`](https://github.com/actions/toolkit/tree/master/packages/io#rm--rf), allowing it to recursively remove files and directories.
- It will still succeed even if the specified file or directory doesn't exist.
- Compatible with all environments.
- Supports removing multiple paths in a single run by listing each path separately.
- Handles both relative and absolute paths, but does _not_ support glob patterns or wildcards.
- **No protection for critical system paths.** Exercise caution when using this action on self-hosted runners.
- While it can delete files from the repository within a workflow, you'll need to commit the changes manually.

## License

MIT
