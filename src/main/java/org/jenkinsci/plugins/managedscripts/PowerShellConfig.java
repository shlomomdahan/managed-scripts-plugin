package org.jenkinsci.plugins.managedscripts;

import edu.umd.cs.findbugs.annotations.NonNull;
import hudson.Extension;
import org.jenkinsci.lib.configprovider.AbstractConfigProviderImpl;
import org.jenkinsci.lib.configprovider.model.Config;
import org.jenkinsci.lib.configprovider.model.ContentType;
import org.kohsuke.stapler.DataBoundConstructor;

import java.util.ArrayList;
import java.util.List;

public class PowerShellConfig extends Config {

  public final List<Arg> args;

  @DataBoundConstructor
  public PowerShellConfig(String id, String name, String comment, String content, List<Arg> args) {
      super(id, name, comment, content);

      if (args != null) {
          List<Arg> filteredArgs = new ArrayList<PowerShellConfig.Arg>();
          for (Arg arg : args) {
              if (arg.name != null && arg.name.trim().length() > 0) {
                  filteredArgs.add(arg);
              }
          }
          this.args = filteredArgs;
      } else {
          this.args = null;
      }
  }

  public static class Arg {
      public final String name;

      @DataBoundConstructor
      public Arg(final String name) {
          this.name = name;
      }
  }

  @Extension(ordinal = 70)
  public static class PowerShellConfigProvider extends AbstractConfigProviderImpl {

      public PowerShellConfigProvider() {
          load();
      }

      @Override
      public ContentType getContentType() {
          return ContentType.DefinedType.HTML;
      }

      @Override
      public String getDisplayName() {
          return Messages.powershell_buildstep_provider_name();
      }

      @Override
      public Config newConfig() {
          String id = getProviderId() + System.currentTimeMillis();
          return new PowerShellConfig(id, "Build Step", "", "Write-Host \"hello\";", null);
      }

      @NonNull
      @Override
      public Config newConfig(@NonNull String id) {
          return new PowerShellConfig(id, "Build Step", "", "Write-Host \"hello\";", null);
      }
  }

}
